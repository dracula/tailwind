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

You can also access a full range of color options (50 - 900) outside of the default colors:

#### darker/Nosferatu
Number      | Hex       | ![Color Picker Boxes](https://draculatheme.com/static/img/color-boxes/eyedropper.png)
---          | ---            | ---
50  | `#cdd0e4` | ![#cdd0e4](https://via.placeholder.com/15/cdd0e4/000000?text=+)
100  | `#b5bad6` | ![#b5bad6](https://via.placeholder.com/15/b5bad6/000000?text=+)
200  | `#9ea4c8` | ![#9ea4c8](https://via.placeholder.com/15/9ea4c8/000000?text=+)
300  | `#888fb8` | ![#888fb8](https://via.placeholder.com/15/888fb8/000000?text=+)
400  | `#727aa8` | ![#727aa8](https://via.placeholder.com/15/727aa8/000000?text=+)
500  | `#5f6795` | ![#5f6795](https://via.placeholder.com/15/5f6795/000000?text=+)
600  | `#53597c` | ![#53597c](https://via.placeholder.com/15/53597c/000000?text=+)
700  | `#454a64` | ![#454a64](https://via.placeholder.com/15/454a64/000000?text=+)
800  | `#373a4d` | ![#373a4d](https://via.placeholder.com/15/373a4d/000000?text=+)
900  | `#282a36` | ![#282a36](https://via.placeholder.com/15/282a36/000000?text=+)
DEFAULT  | `#282a36` | ![#282a36](https://via.placeholder.com/15/282a36/000000?text=+)
  
#### dark/Aro
Number      | Hex       | ![Color Picker Boxes](https://draculatheme.com/static/img/color-boxes/eyedropper.png)
---          | ---         | ---
50  | `#f7f7fb` | ![#f7f7fb](https://via.placeholder.com/15/f7f7fb/000000?text=+)
100  | `#dfe1ed` | ![#dfe1ed](https://via.placeholder.com/15/dfe1ed/000000?text=+)
200  | `#c7cadf` | ![#c7cadf](https://via.placeholder.com/15/c7cadf/000000?text=+)
300  | `#b1b5d0` | ![#b1b5d0](https://via.placeholder.com/15/b1b5d0/000000?text=+)
400  | `#9ba0c0` | ![#9ba0c0](https://via.placeholder.com/15/9ba0c0/000000?text=+)
500  | `#858bb0` | ![#858bb0](https://via.placeholder.com/15/858bb0/000000?text=+)
600  | `#71779f` | ![#71779f](https://via.placeholder.com/15/71779f/000000?text=+)
700  | `#606689` | ![#606689](https://via.placeholder.com/15/606689/000000?text=+)
800  | `#525771` | ![#525771](https://via.placeholder.com/15/525771/000000?text=+)
900  | `#44475a` | ![#44475a](https://via.placeholder.com/15/44475a/000000?text=+)
DEFAULT  | `#44475a` | ![#44475a](https://via.placeholder.com/15/44475a/000000?text=+)
  
#### light/Cullen
Number      | Hex       | ![Color Picker Boxes](https://draculatheme.com/static/img/color-boxes/eyedropper.png)
---          | ---    | ---
50  | `#f8f8f2` | ![#f8f8f2](https://via.placeholder.com/15/f8f8f2/000000?text=+)
100  | `#eaeada` | ![#eaeada](https://via.placeholder.com/15/eaeada/000000?text=+)
200  | `#dcdcc3` | ![#dcdcc3](https://via.placeholder.com/15/dcdcc3/000000?text=+)
300  | `#cdcdac` | ![#cdcdac](https://via.placeholder.com/15/cdcdac/000000?text=+)
400  | `#bdbd96` | ![#bdbd96](https://via.placeholder.com/15/bdbd96/000000?text=+)
500  | `#adad81` | ![#adad81](https://via.placeholder.com/15/adad81/000000?text=+)
600  | `#9c9c6c` | ![#9c9c6c](https://via.placeholder.com/15/9c9c6c/000000?text=+)
700  | `#85855d` | ![#85855d](https://via.placeholder.com/15/85855d/000000?text=+)
800  | `#6d6d4f` | ![#6d6d4f](https://via.placeholder.com/15/6d6d4f/000000?text=+)
900  | `#565641` | ![#565641](https://via.placeholder.com/15/565641/000000?text=+)
DEFAULT  | `#f8f8f2` | ![#f8f8f2](https://via.placeholder.com/15/f8f8f2/000000?text=+)
  
#### blue/VonCount
Number      | Hex       | ![Color Picker Boxes](https://draculatheme.com/static/img/color-boxes/eyedropper.png)
---          | ---      | ---
50  | `#f0f2f8` | ![#f0f2f8](https://via.placeholder.com/15/f0f2f8/000000?text=+)
100  | `#d7dcec` | ![#d7dcec](https://via.placeholder.com/15/d7dcec/000000?text=+)
200  | `#bec6df` | ![#bec6df](https://via.placeholder.com/15/bec6df/000000?text=+)
300  | `#a6b0d1` | ![#a6b0d1](https://via.placeholder.com/15/a6b0d1/000000?text=+)
400  | `#8f9bc3` | ![#8f9bc3](https://via.placeholder.com/15/8f9bc3/000000?text=+)
500  | `#7886b4` | ![#7886b4](https://via.placeholder.com/15/7886b4/000000?text=+)
600  | `#6272a4` | ![#6272a4](https://via.placeholder.com/15/6272a4/000000?text=+)
700  | `#54628c` | ![#54628c](https://via.placeholder.com/15/54628c/000000?text=+)
800  | `#485273` | ![#485273](https://via.placeholder.com/15/485273/000000?text=+)
900  | `#3b425a` | ![#3b425a](https://via.placeholder.com/15/3b425a/000000?text=+)
DEFAULT  | `#6272a4` | ![#6272a4](https://via.placeholder.com/15/6272a4/000000?text=+)
  
#### cyan/VanHelsing
Number      | Hex       | ![Color Picker Boxes](https://draculatheme.com/static/img/color-boxes/eyedropper.png)
---          | ---       | ---
50  | `#fafeff` | ![#fafeff](https://via.placeholder.com/15/fafeff/000000?text=+)
100  | `#d4f8ff` | ![#d4f8ff](https://via.placeholder.com/15/d4f8ff/000000?text=+)
200  | `#aff0fe` | ![#aff0fe](https://via.placeholder.com/15/aff0fe/000000?text=+)
300  | `#8be9fd` | ![#8be9fd](https://via.placeholder.com/15/8be9fd/000000?text=+)
400  | `#67e1fb` | ![#67e1fb](https://via.placeholder.com/15/67e1fb/000000?text=+)
500  | `#44d9f8` | ![#44d9f8](https://via.placeholder.com/15/44d9f8/000000?text=+)
600  | `#22d0f5` | ![#22d0f5](https://via.placeholder.com/15/22d0f5/000000?text=+)
700  | `#0dbfe5` | ![#0dbfe5](https://via.placeholder.com/15/0dbfe5/000000?text=+)
800  | `#0ca0bf` | ![#0ca0bf](https://via.placeholder.com/15/0ca0bf/000000?text=+)
900  | `#0c819a` | ![#0c819a](https://via.placeholder.com/15/0c819a/000000?text=+)
DEFAULT  | `#8be9fd` | ![#8be9fd](https://via.placeholder.com/15/8be9fd/000000?text=+)
  
#### green/Blade
Number      | Hex       | ![Color Picker Boxes](https://draculatheme.com/static/img/color-boxes/eyedropper.png)
---          | ---          | ---
50  | `#e2ffe9` | ![#e2ffe9](https://via.placeholder.com/15/e2ffe9/000000?text=+)
100  | `#bcffcd` | ![#bcffcd](https://via.placeholder.com/15/bcffcd/000000?text=+)
200  | `#97feb1` | ![#97feb1](https://via.placeholder.com/15/97feb1/000000?text=+)
300  | `#73fc96` | ![#73fc96](https://via.placeholder.com/15/73fc96/000000?text=+)
400  | `#50fa7b` | ![#50fa7b](https://via.placeholder.com/15/50fa7b/000000?text=+)
500  | `#2df760` | ![#2df760](https://via.placeholder.com/15/2df760/000000?text=+)
600  | `#0cf346` | ![#0cf346](https://via.placeholder.com/15/0cf346/000000?text=+)
700  | `#0ccd3d` | ![#0ccd3d](https://via.placeholder.com/15/0ccd3d/000000?text=+)
800  | `#0ba833` | ![#0ba833](https://via.placeholder.com/15/0ba833/000000?text=+)
900  | `#0a8329` | ![#0a8329](https://via.placeholder.com/15/0a8329/000000?text=+)
DEFAULT  | `#50fa7b` | ![#50fa7b](https://via.placeholder.com/15/50fa7b/000000?text=+)
  
#### orange/Morbius
Number      | Hex       | ![Color Picker Boxes](https://draculatheme.com/static/img/color-boxes/eyedropper.png)
---          | ---     | ---
50  | `#ffefdd` | ![#ffefdd](https://via.placeholder.com/15/ffefdd/000000?text=+)
100  | `#ffdcb7` | ![#ffdcb7](https://via.placeholder.com/15/ffdcb7/000000?text=+)
200  | `#ffca92` | ![#ffca92](https://via.placeholder.com/15/ffca92/000000?text=+)
300  | `#ffb86c` | ![#ffb86c](https://via.placeholder.com/15/ffb86c/000000?text=+)
400  | `#fda648` | ![#fda648](https://via.placeholder.com/15/fda648/000000?text=+)
500  | `#fb9325` | ![#fb9325](https://via.placeholder.com/15/fb9325/000000?text=+)
600  | `#f38107` | ![#f38107](https://via.placeholder.com/15/f38107/000000?text=+)
700  | `#cd6d08` | ![#cd6d08](https://via.placeholder.com/15/cd6d08/000000?text=+)
800  | `#a75a08` | ![#a75a08](https://via.placeholder.com/15/a75a08/000000?text=+)
900  | `#824707` | ![#824707](https://via.placeholder.com/15/824707/000000?text=+)
DEFAULT  | `#ffb86c` | ![#ffb86c](https://via.placeholder.com/15/ffb86c/000000?text=+)
  
#### pink/Buffy
Number      | Hex       | ![Color Picker Boxes](https://draculatheme.com/static/img/color-boxes/eyedropper.png)
---          | ---        | ---
50  | `#ffeaf6` | ![#ffeaf6](https://via.placeholder.com/15/ffeaf6/000000?text=+)
100  | `#ffc4e6` | ![#ffc4e6](https://via.placeholder.com/15/ffc4e6/000000?text=+)
200  | `#ff9fd6` | ![#ff9fd6](https://via.placeholder.com/15/ff9fd6/000000?text=+)
300  | `#ff79c6` | ![#ff79c6](https://via.placeholder.com/15/ff79c6/000000?text=+)
400  | `#fd55b6` | ![#fd55b6](https://via.placeholder.com/15/fd55b6/000000?text=+)
500  | `#fb31a5` | ![#fb31a5](https://via.placeholder.com/15/fb31a5/000000?text=+)
600  | `#f80e95` | ![#f80e95](https://via.placeholder.com/15/f80e95/000000?text=+)
700  | `#d90880` | ![#d90880](https://via.placeholder.com/15/d90880/000000?text=+)
800  | `#b3086b` | ![#b3086b](https://via.placeholder.com/15/b3086b/000000?text=+)
900  | `#8e0855` | ![#8e0855](https://via.placeholder.com/15/8e0855/000000?text=+)
DEFAULT  | `#ff79c6` | ![#ff79c6](https://via.placeholder.com/15/ff79c6/000000?text=+)
  
#### purple/Dracula
Number      | Hex       | ![Color Picker Boxes](https://draculatheme.com/static/img/color-boxes/eyedropper.png)
---          | ---           | ---
50  | `#fefeff` | ![#fefeff](https://via.placeholder.com/15/fefeff/000000?text=+)
100  | `#e9dafe` | ![#e9dafe](https://via.placeholder.com/15/e9dafe/000000?text=+)
200  | `#d3b6fc` | ![#d3b6fc](https://via.placeholder.com/15/d3b6fc/000000?text=+)
300  | `#bd93f9` | ![#bd93f9](https://via.placeholder.com/15/bd93f9/000000?text=+)
400  | `#a771f6` | ![#a771f6](https://via.placeholder.com/15/a771f6/000000?text=+)
500  | `#924ff2` | ![#924ff2](https://via.placeholder.com/15/924ff2/000000?text=+)
600  | `#7d2eed` | ![#7d2eed](https://via.placeholder.com/15/7d2eed/000000?text=+)
700  | `#6916e0` | ![#6916e0](https://via.placeholder.com/15/6916e0/000000?text=+)
800  | `#5914bb` | ![#5914bb](https://via.placeholder.com/15/5914bb/000000?text=+)
900  | `#491298` | ![#491298](https://via.placeholder.com/15/491298/000000?text=+)
DEFAULT  | `#bd93f9` | ![#bd93f9](https://via.placeholder.com/15/bd93f9/000000?text=+)
  
#### red/Marcelin
Number      | Hex       | ![Color Picker Boxes](https://draculatheme.com/static/img/color-boxes/eyedropper.png)
---          | ---            | ---
50  | `#ffecec` | ![#ffecec](https://via.placeholder.com/15/ffecec/000000?text=+)
100  | `#ffc6c6` | ![#ffc6c6](https://via.placeholder.com/15/ffc6c6/000000?text=+)
200  | `#ffa0a0` | ![#ffa0a0](https://via.placeholder.com/15/ffa0a0/000000?text=+)
300  | `#ff7b7b` | ![#ff7b7b](https://via.placeholder.com/15/ff7b7b/000000?text=+)
400  | `#ff5555` | ![#ff5555](https://via.placeholder.com/15/ff5555/000000?text=+)
500  | `#fd3131` | ![#fd3131](https://via.placeholder.com/15/fd3131/000000?text=+)
600  | `#fb0e0e` | ![#fb0e0e](https://via.placeholder.com/15/fb0e0e/000000?text=+)
700  | `#dd0606` | ![#dd0606](https://via.placeholder.com/15/dd0606/000000?text=+)
800  | `#b70707` | ![#b70707](https://via.placeholder.com/15/b70707/000000?text=+)
900  | `#910707` | ![#910707](https://via.placeholder.com/15/910707/000000?text=+)
DEFAULT  | `#ff5555` | ![#ff5555](https://via.placeholder.com/15/ff5555/000000?text=+)
  
#### yellow/Lincoln
Number      | Hex       | ![Color Picker Boxes](https://draculatheme.com/static/img/color-boxes/eyedropper.png)
---          | ---          | ---
50  | `#fefff8` | ![#fefff8](https://via.placeholder.com/15/fefff8/000000?text=+)
100  | `#fafed3` | ![#fafed3](https://via.placeholder.com/15/fafed3/000000?text=+)
200  | `#f6fcaf` | ![#f6fcaf](https://via.placeholder.com/15/f6fcaf/000000?text=+)
300  | `#f1fa8c` | ![#f1fa8c](https://via.placeholder.com/15/f1fa8c/000000?text=+)
400  | `#ebf769` | ![#ebf769](https://via.placeholder.com/15/ebf769/000000?text=+)
500  | `#e5f347` | ![#e5f347](https://via.placeholder.com/15/e5f347/000000?text=+)
600  | `#dfef26` | ![#dfef26](https://via.placeholder.com/15/dfef26/000000?text=+)
700  | `#ccdd12` | ![#ccdd12](https://via.placeholder.com/15/ccdd12/000000?text=+)
800  | `#abb811` | ![#abb811](https://via.placeholder.com/15/abb811/000000?text=+)
900  | `#899410` | ![#899410](https://via.placeholder.com/15/899410/000000?text=+)
DEFAULT  | `#f1fa8c` | ![#f1fa8c](https://via.placeholder.com/15/f1fa8c/000000?text=+)
