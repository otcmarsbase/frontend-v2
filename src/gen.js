/**
 * @example
 * node gen.js ./assets/icon/socials ./images.tsx %file%Icon
 * will generate images.tsx that contains import %file%Icon from "assets/icon/socials", 
 * %file% is replacement for original filename
 */

const fs = require('fs')
const path = require('path')

// Specify the folder path and output file path
const folderPath = path.join(__dirname, process.argv[2])
const outputPath = path.join(__dirname, process.argv[3])

/*
 %importName%Icon => NameIcon
*/
const importMask = process.argv[4]
const srcPath = path.join(__dirname, './')
const importPrefix = `@${folderPath.replace(srcPath, '/')}`

const files = fs.readdirSync(folderPath)

// Filter out non-image files 
const imageFiles = files.filter((file) =>
	['.png', '.jpg', '.jpeg', '.gif', '.svg'].includes(path.extname(file))
)

const filename = (file) => path.parse(file).name
const mask = (file) => importMask.replace(/%(.*)%/, () => filename(file))
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
fs.writeFileSync(outputPath, `${importStatements}\n\n${exportsStatement}`, {
	flag: 'w+',
})
