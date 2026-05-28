### [Tailwind](https://tailwindcss.com)

A tiny Tailwind plugin that brings the Dracula color palette into your project.

#### Install using npm

Install the package as a development dependency:

```bash
npm install tailwind-dracula --save-dev
```

#### Install manually

If you prefer, you can also clone this repository and copy what you need:

```bash
git clone https://github.com/dracula/tailwind.git
```

#### Activating theme

1. Add the plugin to your `tailwind.config.js`:

```js
plugins: [require("tailwind-dracula")()],
```

2. Use Dracula colors in your classes:

```html
<div class="bg-buffy">
  <p class="text-nosferatu">I vant to suck your blood...</p>
</div>
```

3. Done - the Dracula palette is now available anywhere you use Tailwind colors.

Color naming has two options:

- Color names, such as `darker`, `pink`, and `purple`
- Vampire names, such as `dracula`, `vonCount`, and `buffy`

> Default Dracula color names can overlap with Tailwind default color names.

#### Prefixing color names

To avoid naming collisions, pass a prefix for color-name aliases:

```js
plugins: [require("tailwind-dracula")("dracula")],
```

Then use prefixed color-name aliases and unprefixed vampire aliases:

```html
<div class="bg-dracula-pink">
  <p class="text-nosferatu">I vant to suck your blood...</p>
  <p class="text-pink-500">Tailwind is cool...</p>
</div>
```

To require the prefix for all Dracula color names, pass `true` as the second argument:

```js
plugins: [require("tailwind-dracula")("dracula", true)],
```

Example:

```html
<div class="bg-dracula-pink">
  <p class="text-nosferatu">This no longer works.</p>
  <p class="text-dracula-buffy">This works.</p>
  <p class="text-pink-500">Tailwind colors still work.</p>
</div>
```

#### Changing color names

Import the color map and extend Tailwind with your own aliases:

```js
const dracula = require("tailwind-dracula/colors");

theme: {
  extend: {
    colors: {
      ...dracula, // add all Dracula colors
      pinkish: dracula.buffy, // rename buffy
    },
  },
},
```

#### Full color palette

For the full 50-900 scale, see [All colors](https://github.com/dracula/tailwind/blob/master/colors.js).

![Full colors](https://github.com/dracula/tailwind/blob/master/colors.png)
