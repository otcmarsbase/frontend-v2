/**
 * @example
 * Принимает аргументы:
 * 1) путь от src до папки с файлами = folderPath
 * 2) локация для сгенерированного файла
 * 3) маска названия файла. В строке вхождение %(any string)% заменяется на названи файла. 
 *    Например маска %file%Icon к любому имени файла добавит суффикс Icon
 * 4) необязательный флаг открытия сгенерированного файла(чтобы дополнять/переписывать файл). По умолчанию равен w
 * https://nodejs.org/api/fs.html#file-system-flags
 * Скрипт генерирует файл с импортами картинок в формате 
 * import FileName from "@/{folderPath}"
 * export {
 *  FileName,
 * }
 * 
 * node generate-images-file.js ./assets/icon/ ./images.tsx %file%Icon w
 */

const fs = require('fs')
const path = require('path')
const prettier = require('prettier')

const pretify = (str) => prettier.format(str, { parser: 'babel', tabWidth: 4 })

const folderPath = path.join(__dirname, process.argv[2])
const outputPath = path.join(__dirname, process.argv[3])


const importMask = process.argv[4]
const openFileFlag = process.argv[5] || 'w'
const srcPath = path.join(__dirname, './')
const importPrefix = `@${folderPath.replace(srcPath, '/')}`

const files = fs.readdirSync(folderPath)

const imageFiles = files.filter((file) =>
	['.png', '.jpg', '.jpeg', '.gif', '.svg'].includes(path.extname(file))
)
const capitalizeFirstLetter = (string) =>
	string.charAt(0).toUpperCase() + string.slice(1)
const filename = (file) => path.parse(file).name

const mask = (file) =>
	capitalizeFirstLetter(
		importMask.replace(/%(.*)%/, () =>
			capitalizeFirstLetter(filename(file))
		)
	)
const importStatements = imageFiles
	.map(
		(file) => `import ${mask(file)} from "${path.join(importPrefix, file)}"`
	)
	.join('\n')

const exportsStatement = `export {\n${imageFiles
	.map((file) => `${mask(file)},`)
	.join('\n')}\n}`

fs.writeFileSync(
	outputPath,
	pretify(`${importStatements}\n\n${exportsStatement}`, {
		flag: openFileFlag,
	})
)
