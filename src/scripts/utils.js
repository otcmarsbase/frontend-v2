const path = require("path")

const capitalizeFirstLetter = (string) =>
	string.charAt(0).toUpperCase() + string.slice(1)

const getFilename = (file) => path.parse(file).name

const formatImportFile = (file, template) =>
	capitalizeFirstLetter(
		template.replace(/%(.*)%/, () =>
			capitalizeFirstLetter(getFilename(file))
		)
	)

module.exports = {
	capitalizeFirstLetter,
	getFilename,
	formatImportFile,
}
