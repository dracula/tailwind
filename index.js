const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ theme }) {

}, {
    theme: {
        extend: {
            colors: theme => ({
                'darker': '#282a36',
                'dark': '#44475a',
                'light': '#f8f8f2',
                'blue': '#6272a4',
                'cyan': '#8be9fd',
                'green': '#50fa7b',
                'orange': '#ffb86c',
                'pink': '#ff79c6',
                'purple': '#bd93f9',
                'red': '#ff5555',
                'yellow': '#f1fa8c',
                'nosferatu': '#282a36',
                'aro': '#44475a',
                'cullen': '#f8f8f2',
                'vonCount': '#6272a4',
                'vanHelsing': '#8be9fd',
                'blade': '#50fa7b',
                'morbius': '#ffb86c',
                'buffy': '#ff79c6',
                'dracula': '#bd93f9',
                'marcelin': '#ff5555',
                'lincoln': '#f1fa8c',
            })
        }
    }
})
