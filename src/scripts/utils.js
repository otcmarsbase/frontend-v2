const path = require("path")
const prettier = require("prettier")

const capitalizeFirstLetter = (string) =>
	string.charAt(0).toUpperCase() + string.slice(1)

const getFilename = (file) => path.parse(file).name

const formatImportFile = (file, template) =>
	capitalizeFirstLetter(
		template.replace(/%(.*)%/, () =>
			capitalizeFirstLetter(getFilename(file))
		)
	)

const pretify = (str) =>
	prettier.format(str, { parser: "babel", tabWidth: 4, semi: false })

module.exports = {
	capitalizeFirstLetter,
	getFilename,
	formatImportFile,
	pretify,
}
