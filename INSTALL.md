### [Tailwind](https://tailwindcss.com)

A super tiny tailwind plugin that enables the use of the Dracula colour palette.

Hopefully this will give you some great dark colors in your next project, and save you 5 min of setting up custom colors.

#### Installation

```
npm i tailwind-dracula --save-dev
```

#### Usage

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

> The default color names for Dracula can override the tailwind default style names.

#### Prefixing color names
By default the plugin accepts a prefix that can be used for the color name options (to avoid clashes with tailwind defaults).
```js
  plugins: [
    require('tailwind-dracula')('dracula'),
  ],
```
Then use the color name option with the dracula prefix, but use the vampire name options without the prefix
```html
<div class="bg-dracula-pink">
    <p class="text-nosferatu">I vant to suck your blood...</p>
    <p class="text-pink-500">Tailwind is cool...</p> //still works!
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

#### Changing color names

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

#### Full Color Palette

You can also access a full range of color options (50 - 900) outside of the default colors: [All Colors](https://github.com/dracula/tailwind/blob/readme-update/colors.js).

![Full Colors](https://github.com/dracula/tailwind/blob/readme-update/colors.png?raw=true)
