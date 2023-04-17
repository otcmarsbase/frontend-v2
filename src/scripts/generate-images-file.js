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

