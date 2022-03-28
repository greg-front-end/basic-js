const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  const data = {}
  const replaceNames = []
  for (let i = 0; i < names.length; i++) {
      let name = names[i]
      if (!data[name]) {
          data[name] = 1
          replaceNames.push(name)
      } else {
          data[name] += 1
          replaceNames.push((`${name}(${data[name] - 1})`))
      }

  }
  return replaceNames.reduce((arr, elem) => {

      if (!arr.includes(elem)) {
          arr.push(elem)
      } else {
          let newName = (`${elem}(${data[elem]})`)
          arr.push(newName)
      }
      return arr
  }, [])
}

module.exports = {
  renameFiles
};
