/**
 * @example
 * node generate-images-file.js ./assets/icon/socials ./images.tsx %file%Icon flag
 * will generate images.tsx that contains import %file%Icon from "assets/icon/socials",
 * %file% is replacement for original filename
 * flag -- file system flag, default "w" https://nodejs.org/api/fs.html#file-system-flags
 */

const fs = require('fs')
const path = require('path')
const prettier = require('prettier')

const pretify = (str) => prettier.format(str, { parser: 'babel', tabWidth: 4 })

// Specify the folder path and output file path
const folderPath = path.join(__dirname, process.argv[2])
const outputPath = path.join(__dirname, process.argv[3])

/*
 %importName%Icon => NameIcon
*/
const importMask = process.argv[4]
const openFileFlag = process.argv[5] || 'w'
const srcPath = path.join(__dirname, './')
const importPrefix = `@${folderPath.replace(srcPath, '/')}`

const files = fs.readdirSync(folderPath)

// Filter out non-image files
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
// Generate the import statements
const importStatements = imageFiles
	.map(
		(file) => `import ${mask(file)} from "${path.join(importPrefix, file)}"`
	)
	.join('\n')

// Generate the exports statement
const exportsStatement = `export {\n${imageFiles
	.map((file) => `${mask(file)},`)
	.join('\n')}\n}`

// Write the output file
fs.writeFileSync(
	outputPath,
	pretify(`${importStatements}\n\n${exportsStatement}`, {
		flag: openFileFlag,
	})
)
