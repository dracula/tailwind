const plugin = require('tailwindcss/plugin')

module.exports = function (prefix, hard = false) {
  let module = plugin(function({ theme }) {

  }, {
      theme: {
          extend: {
              colors: theme => ({
                  [prefix ? prefix + '-darker' : 'darker']: '#282a36',
                  [prefix ? prefix + '-dark' : 'dark']: '#44475a',
                  [prefix ? prefix + '-light' : 'light']: '#f8f8f2',
                  [prefix ? prefix + '-blue' : 'blue']: '#6272a4',
                  [prefix ? prefix + '-cyan' : 'cyan']: '#8be9fd',
                  [prefix ? prefix + '-green' : 'green']: '#50fa7b',
                  [prefix ? prefix + '-orange' : 'orange']: '#ffb86c',
                  [prefix ? prefix + '-pink' : 'pink']: '#ff79c6',
                  [prefix ? prefix + '-purple' : 'purple']: '#bd93f9',
                  [prefix ? prefix + '-red' : 'red']: '#ff5555',
                  [prefix ? prefix + '-yellow' : 'yellow']: '#f1fa8c',
                  [prefix && hard ? prefix + '-nosferatu' : 'nosferatu']: '#282a36',
                  [prefix && hard ? prefix + '-aro' : 'aro']: '#44475a',
                  [prefix && hard ? prefix + '-cullen' : 'cullen']: '#f8f8f2',
                  [prefix && hard ? prefix + '-vonCount' : 'vonCount']: '#6272a4',
                  [prefix && hard ? prefix + '-vanHelsing' : 'vanHelsing']: '#8be9fd',
                  [prefix && hard ? prefix + '-blade' : 'blade']: '#50fa7b',
                  [prefix && hard ? prefix + '-morbius' : 'morbius']: '#ffb86c',
                  [prefix && hard ? prefix + '-buffy' : 'buffy']: '#ff79c6',
                  [prefix && hard ? prefix + '-dracula' : 'dracula']: '#bd93f9',
                  [prefix && hard ? prefix + '-marcelin' : 'marcelin']: '#ff5555',
                  [prefix && hard ? prefix + '-lincoln' : 'lincoln']: '#f1fa8c',
              })
          }
      }
  })

  return module;
}
