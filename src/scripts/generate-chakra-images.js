const fs = require("fs")
const path = require("path")
const utils = require("./utils.js")
const rt = require("runtypes")

const dirName = path.join(__dirname, "..")

const getArgs = () => {
	const processEnv = rt.Record({
		FOLDER_PATH: rt.String,
		OUTPUT_PATH: rt.String,
		IMPORT_MASK: rt.String,
		OUT_FILE_FLAG: rt.String,
		IMG_TYPE: rt.Union(rt.Literal("svg"), rt.Literal("img")),
	})

	let env = processEnv.validate({
		FOLDER_PATH: path.join(dirName, process.argv[2]),
		OUTPUT_PATH: path.join(dirName, process.argv[3]),
		IMPORT_MASK: process.argv[4],
		OUT_FILE_FLAG: process.argv[5] || "w",
		IMG_TYPE: process.argv[6],
	})
	if (!env.success) {
		console.error("wrong params")
		console.log(env.details)
		process.exit(1)
	}
	return env.value
}

const args = getArgs()

const srcPath = path.join(dirName, "./")
const importPrefix = `@${args.FOLDER_PATH.replace(srcPath, "/")}`

const files = fs.readdirSync(args.FOLDER_PATH)

const imageFiles = files.filter((file) =>
	[".png", ".jpg", ".jpeg", ".gif", ".svg"].includes(path.extname(file))
)

const header = `
	/**
	* This file is generated automatically by generate-chakra-images.js
	* Do not edit it manually
	* To regenerate this file run: yarn generate-images
	*/
`
const importPaths = {
	svg: (filename, path) =>
		`import { ReactComponent as ${filename} } from "${path}"`,
	img: (filename, path) => `import ${filename} from "${path}"`,
}

const importName = (file, mask) => utils.formatImportFile(file, mask)

const getExportStatement = (componentName, importName) => {
	return `export const ${componentName} = img(${importName})`
}

const importWrapper = {
	svg: 'import { Icon as ChakraIcon } from "@chakra-ui/react"',
	img: 'import { Image } from "@/components/Image/Image"',
}

const ComponentWrapper = {
	svg: `
	\n
		 const img = (img: any) => {
			const Component: React.FC<React.ComponentProps<typeof ChakraIcon>> = (props) => {
				return <ChakraIcon as={img} {...props} />
			}
			return Component
	      }`,
	img: `\n
	       const img = (img: any) => {
			const Component: React.FC<React.ComponentProps<typeof Image>> = (props) => {
				return <Image src={img} {...props} />
			}
			return Component
  		  }`,
}

const importStatements = imageFiles
	.map((file) =>
		importPaths[args.IMG_TYPE](
			importName(file, args.IMPORT_MASK) + "Source",
			path.join(importPrefix, file)
		)
	)
	.concat([
		'import React from "react"',
		importWrapper[args.IMG_TYPE],
		ComponentWrapper[args.IMG_TYPE],
	])
	.join("\n")

const exportsStatement = imageFiles
	.map((file) =>
		getExportStatement(
			importName(file, args.IMPORT_MASK),
			importName(file, args.IMPORT_MASK) + "Source"
		)
	)
	.join("\n\n")

fs.writeFileSync(
	args.OUTPUT_PATH,
	utils.pretify(`${header}\n\n${importStatements}\n\n${exportsStatement}`, {
		flag: args.OUT_FILE_FLAG,
	})
)
