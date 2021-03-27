const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ theme }) {

}, {
    theme: {
        extend: {
            colors: theme => (colors)
        }
    }
})
