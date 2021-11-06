const plugin = require('tailwindcss/plugin')
const baseColors = require('./colors')

module.exports = function (prefix, hard = false) {
  let module = plugin(function({ theme }) {

  }, {
      theme: {
          extend: {
              colors: theme => ({
                  ...(() => {
                    const returnColors = {}
                    Object.keys(baseColors).forEach((key, index) => {
                        if (index < 10) returnColors[
                            prefix ? prefix + `-${key}` : key
                        ] = baseColors[key]
                        else returnColors[
                            prefix && hard ? prefix + `-${key}` : key
                        ] = baseColors[key]
                    })
                    return returnColors
                  })()
              })
          }
      }
  })

  return module;
}
