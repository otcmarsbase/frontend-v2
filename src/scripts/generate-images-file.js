/**
 * @example
 * Принимает аргументы:
 * 1) путь от src до папки с файлами = folderPath
 * 2) локация для сгенерированного файла
 * 3) маска названия файла. В строке вхождение %(any string)% заменяется на названи файла.
 *    Например маска %file%Icon к любому имени файла добавит суффикс Icon
 * 4) необязательный флаг открытия сгенерированного файла(чтобы дополнять/переписывать файл). По умолчанию равен w
 *     (https://nodejs.org/api/fs.html#file-system-flags)
 * 5) формат импортов, svg или img, для svg генерируется особый импорт вида
 *           import from { ReactComponent as %filename% }. Это надо для работы плагина svgr
 *
 *
 * Скрипт генерирует файл с импортами картинок в формате
 * import FileName from "@/{folderPath}"
 * export {
 *  FileName,
 * }
 *
 * node generate-images-file.js ./assets/icon/ ./images.tsx %file%Icon w
 */

const fs = require("fs")
const path = require("path")
const prettier = require("prettier")
const utls = require("./utils.js")

const pretify = (str) =>
	prettier.format(str, { parser: "babel", tabWidth: 4, semi: false })

const dirName = path.join(__dirname, "..")
const folderPath = path.join(dirName, process.argv[2])
const outputPath = path.join(dirName, process.argv[3])

const importMask = process.argv[4]
const openFileFlag = process.argv[5] || "w"
const format = process.argv[6] || "img"
const srcPath = path.join(dirName, "./")
const importPrefix = `@${folderPath.replace(srcPath, "/")}`

const files = fs.readdirSync(folderPath)

const imageFiles = files.filter((file) =>
	[".png", ".jpg", ".jpeg", ".gif", ".svg"].includes(path.extname(file))
)


const importPaths = {
	svg: (filename, path) =>
		`import { ReactComponent as ${filename} } from "${path}"`,
	img: (filename, path) => `import ${filename} from "${path}"`,
}

const importStatements = imageFiles
	.map((file) =>
		importPaths[format](utls.formatImportFile(file, importMask), path.join(importPrefix, file))
	)
	.join("\n")

const exportsStatement = `export {\n${imageFiles
	.map((file) => `${utls.formatImportFile(file, importMask)},`)
	.join("\n")}\n}`

fs.writeFileSync(
	outputPath,
	pretify(`${importStatements}\n\n${exportsStatement}`, {
		flag: openFileFlag,
	})
)