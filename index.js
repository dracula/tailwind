const plugin = require('tailwindcss/plugin')
const colors = require('./colors.js')

module.exports = plugin(function () {}, { theme: { extend: { colors } } })
