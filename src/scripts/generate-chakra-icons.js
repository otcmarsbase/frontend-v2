const fs = require("fs")
const path = require("path")
const utils = require("./utils.js")

const dirName = path.join(__dirname, "..")
const folderPath = path.join(dirName, process.argv[2])
const outputPath = path.join(dirName, process.argv[3])

const importMask = process.argv[4]
const openFileFlag = process.argv[5] || "w"

const srcPath = path.join(dirName, "./")
const importPrefix = `@${folderPath.replace(srcPath, "/")}`

const files = fs.readdirSync(folderPath)

const imageFiles = files.filter((file) =>
	[".png", ".jpg", ".jpeg", ".gif", ".svg"].includes(path.extname(file))
)

const importPaths = {
	svg: (filename, path) =>
		`import { ReactComponent as ${filename} } from "${path}"`,
}

const importName = (file, importMask) =>
	utils.formatImportFile(file, importMask)

const getExportStatement = (
	componentName,
	importName
) => `export const ${componentName}: React.FC<React.ComponentProps<typeof ChakraIcon>> = (props) => {
                                            	return <ChakraIcon as={${importName}} {...props} />
                                  }`

const importStatements = imageFiles
	.map((file) =>
		importPaths["svg"](
			importName(file, importMask) + "Source",
			path.join(importPrefix, file)
		)
	)
	.concat([
		'import React from "react"',
		'import { Icon as ChakraIcon } from "@chakra-ui/react"',
	])
	.join("\n")

const exportsStatement = imageFiles
	.map((file) =>
		getExportStatement(
			importName(file, importMask),
			importName(file, importMask) + "Source"
		)
	)
	.join("\n\n")

fs.writeFileSync(
	outputPath,
	utils.pretify(`${importStatements}\n\n${exportsStatement}`, {
		flag: openFileFlag,
	})
)
