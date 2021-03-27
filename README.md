
<p align="center">
  <a href="https://github.com/crumb1e/tailwind-nord">
    <img src="https://draculatheme.com/static/icons/pack-1/045-dracula.svg" alt="Logo" width="150" />
  </a>
  <a href="">
    <img src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" width="150" />                                                      
  </a>
  <h1 align="center">Tailwind Dracula</h1>
</p>

A super tiny tailwind plugin that enables the use of the [Dracula colour palette](https://www.draculatheme.com/).

Hopefully this will give you some great dark colors in your next project, and save you 5 min of setting up custom colors.

## Installation

`npm i tailwind-dracula`

## Usage


In your tailwind.config.js:

```js
  plugins: [
    require('tailwind-dracula')(),
  ],
```

You now have access to the Dracula theme anywhere you would use normally tailwind colours.

```html
<div class="bg-buffy">
    <p class="text-nosferatu ">I vant to suck your blood...</p>
</div>
```

Color naming has two options (based on Dracula's names with some changes where needed):
* The color name option. <i>ie. darker, pink, purple</i>
* The vampire name option. <i>ie. dracula, vonCount, buffy</i>

> :hand: The default color names for Dracula can override the tailwind default style names.

## Prefixing color names
By default the plugin accepts a prefix that can be used for the color name options (to avoid clashes with tailwind defaults).
```js
  plugins: [
    require('tailwind-dracula')('dracula'),
  ],
```
Then use the color name option with the dracula prefix, but use the vampire name options without the prefix
```html
<div class="bg-dracula-pink">
    <p class="text-nosferatu ">I vant to suck your blood...</p>
    <p class="text-pink-500 ">Tailwind is cool...</p> //still works!
</div>
```

You can also add the prefix for <b><i>ALL</i></b> names by passing `true` into the second parameter.
```js
  plugins: [
    require('tailwind-dracula')('dracula', true),
  ],
```
Now all colors within dracula will require the dracula prefix
```html
<div class="bg-dracula-pink"> //works!
    <p class="text-nosferatu ">I vant to suck your blood...</p> //doesn't work!
    <p class="text-dracula-buffy ">Flesh of my flesh...</p> //works!
    <p class="text-pink-500 ">Tailwind is cool...</p> //still works!
</div>
```

## Changing color names
You can just pull in some of the colors and add them to tailwind
```
const dracula = require('tailwind-dracula/colors')
theme: {
    extend: {
      colors: {
        ...dracula //adds all the colors
        pinkish: dracula.buffy //just adds buffy with the name 'pinkish'
      }
    }
  },
```

## Color Palette

Palette      | Hex       | RGB           | HSL             | ![Color Picker Boxes](https://draculatheme.com/static/img/color-boxes/eyedropper.png)
---          | ---       | ---           | ---             | ---
Darker/Nosferatu    | `#282a36` | `40 42 54`    | `231° 15% 18%`  | ![Background Color](https://draculatheme.com/static/img/color-boxes/background.png)
Dark/Aro | `#44475a` | `68 71 90`    | `232° 14% 31%`  | ![Current Line Color](https://draculatheme.com/static/img/color-boxes/current_line.png)
Light/Cullen   | `#f8f8f2` | `248 248 242` | `60° 30% 96%`   | ![Foreground Color](https://draculatheme.com/static/img/color-boxes/foreground.png)
Blue/VonCount      | `#6272a4` | `98 114 164`  | `225° 27% 51%`  | ![Comment Color](https://draculatheme.com/static/img/color-boxes/comment.png)
Cyan/VanHelsing         | `#8be9fd` | `139 233 253` | `191° 97% 77%`  | ![Cyan Color](https://draculatheme.com/static/img/color-boxes/cyan.png)
Green/Blade        | `#50fa7b` | `80 250 123`  | `135° 94% 65%`  | ![Green Color](https://draculatheme.com/static/img/color-boxes/green.png)
Orange/Morbius       | `#ffb86c` | `255 184 108` | `31° 100% 71%`  | ![Orange Color](https://draculatheme.com/static/img/color-boxes/orange.png)
Pink/Buffy         | `#ff79c6` | `255 121 198` | `326° 100% 74%` | ![Pink Color](https://draculatheme.com/static/img/color-boxes/pink.png)
Purple/Dracula       | `#bd93f9` | `189 147 249` | `265° 89% 78%`  | ![Purple Color](https://draculatheme.com/static/img/color-boxes/purple.png)
Red/Marcelin           | `#ff5555` | `255 85 85`   | `0° 100% 67%`   | ![Red Color](https://draculatheme.com/static/img/color-boxes/red.png)
Yellow/Lincoln       | `#f1fa8c` | `241 250 140` | `65° 92% 76%`   | ![Yellow Color](https://draculatheme.com/static/img/color-boxes/yellow.png)

## Credits
[Dracula Theme](https://www.draculatheme.com/)<br />
[Dracula Theme GitHub](https://github.com/dracula/dracula-theme/blob/master/README.md)
