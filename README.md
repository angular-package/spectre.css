# angular-package

<img align="left"  width="92" height="92" src="https://avatars.githubusercontent.com/u/31412194?s=400&u=c9929aa36826318ccac8f7b84516e1ce3af7e21c&v=4" />

The angular-package supports the development process of [angular](https://angular.io)-based applications in varied ways through the thoughtful, reusable, easy-to-use small pieces of code called packages.

[**docs.angular-package.dev**](https://docs.angular-package.dev)

<br>
<br>

<a href="https://picturepan2.github.io/spectre">
  <img src="https://picturepan2.github.io/spectre/img/spectre-logo.svg" width="72" height="72">
</a>

## Spectre.css

**This Spectre.css is maintained by the angular-package.**

[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)

Spectre.css is a lightweight, responsive and modern CSS framework.

- Lightweight (~10KB gzipped) starting point for your projects
- Flexbox-based, responsive and mobile-friendly layout
- Elegantly designed and developed elements and components

Spectre is a side project based on years of CSS development work on a large web service project. Spectre only includes modern base styles, responsive layout system, CSS components and utilities, and it can be modified for your project with Sass/Scss compiler.

Spectre.css is completely free to use. If you enjoy it, please consider [donating via Paypal](https://www.paypal.me/picturepan2) or [via Patreon](https://www.patreon.com/spectrecss) for the further development. ♥ 

## Getting started

There are 2 ways to get started with Spectre CSS framework in your projects. You can use NPM or Yarn.

### Install with NPM

`$ npm install @angular-package/spectre.css --save`

### Install with Yarn

`$ yarn add @angular-package/spectre.css`

## Demonstration

Demonstration will be available soon here https://angular-package.dev/ui-kit/component/theme

## Usage

```scss
// Main spectre.
@use 'node_modules/@angular-package/spectre.css/spectre' as *;
@use 'node_modules/@angular-package/spectre.css/spectre-exp' as *;
@use 'node_modules/@angular-package/spectre.css/spectre-icons' as *;

// Define variables.
@use 'node_modules/@angular-package/spectre.css/css-variables' as *;

// Get functions.
@use 'node_modules/@angular-package/spectre.css/functions' as *;

// Get mixins.
@use 'node_modules/@angular-package/spectre.css/mixins' as *;

// Get variables.
@use 'node_modules/@angular-package/spectre.css/variables' as *;
```

## SCSS Variables

Colors with a specific **hex** on which others are based.

```scss
// src/_variables.scss
// Core colors
$accent-color: #9932CC !default; // New.
$dark-color: #303742 !default;
$light-color: #fff !default;
$primary-color: #5755d9 !default;

// Control colors
$error-color: #e85600 !default;
$info-color: #d9edf7 !default; // New.
$success-color: #32b643 !default;
$warning-color: #ffb700 !default;

// Other colors
$code-color: #d73e48 !default;
$highlight-color: #ffe9b3 !default;
```

Colors that are based on the **hex** colors above.

```scss
// Core colors
$primary-color-dark: darken($primary-color, 3%) !default;
$primary-color-light: lighten($primary-color, 3%) !default;
$secondary-color: lighten($primary-color, 37.5%) !default;
$secondary-color-dark: darken($secondary-color, 3%) !default;
$secondary-color-light: lighten($secondary-color, 3%) !default;

// Gray colors
$gray-color: lighten($dark-color, 55%) !default;
$gray-color-dark: darken($gray-color, 30%) !default;
$gray-color-light: lighten($gray-color, 20%) !default;

$border-color: lighten($dark-color, 65%) !default;
$border-color-dark: darken($border-color, 10%) !default;
$border-color-light: lighten($border-color, 8%) !default;
$bg-color: lighten($dark-color, 75%) !default;
$bg-color-dark: darken($bg-color, 3%) !default;
$bg-color-light: $light-color !default;

// Other colors
$body-bg: $bg-color-light !default;
$body-font-color: lighten($dark-color, 5%) !default;
$link-color: $primary-color !default;
$link-color-dark: darken($link-color, 10%) !default;
$link-color-light: lighten($link-color, 10%) !default;
```

## CSS properties/variables

The `color-scheme` variable is set to `normal`.

```scss
:root, :host {
  color-scheme: normal;
}
```

Each **hex** color has **four** CSS variables defined by the mixin `define-color($name, $color)`, split into hsl form, where suffix `h` indicates `hue`, `l` lightness, `s` saturation and `a` - alpha.

```scss
// src/mixins/_define-color.scss
// Defines CSS variable color in hsl form.
@mixin define-color($name, $color) {
  --s-#{$name}-h: #{hue($color)};
  --s-#{$name}-l: #{lightness($color)};
  --s-#{$name}-s: #{saturation($color)};
  --s-#{$name}-a: #{alpha($color)};
}
```

For example `primary-color` is built from the CSS variables.

```css
--s-primary-color-h: 240.9090909091deg; // Hue.
--s-primary-color-l: 59.2156862745%; // Lightness.
--s-primary-color-s: 63.4615384615%; // Saturation.
--s-primary-color-a: 1; // Alpha.
```

CSS variables are defined in both `:root` and `:host`.

```scss
// src/_css-variables.scss
:root, :host {
  // Core colors.
  @include define-color('primary-color', $primary-color); // #5755d9
  @include define-color('accent-color', $accent-color); // #9932CC
  @include define-color('dark-color', $dark-color); // #303742
  @include define-color('light-color', $light-color); // #ffffff

  // Control colors
  @include define-color('info-color', $info-color); // #d9edf7
  @include define-color('success-color', $success-color); // #32b643
  @include define-color('error-color', $error-color); // #e85600
  @include define-color('warning-color', $warning-color); // #ffb700

  // Other colors
  @include define-color('code-color', $code-color); // #d73e48
  @include define-color('highlight-color', $highlight-color); // #ffe9b3
}
```

Each color that is based on **hex** color has **four** CSS variables defined by the mixin `define-color-based-on($name, $color, $lightness: 0%)`, split into hsl form, where suffix `h` indicates `hue`, `l` lightness, `s` saturation and `a` - alpha.

```scss
// src/mixins/_define-color-based-on.scss
@mixin define-color-based-on($name, $color, $lightness: 0%) {
  --s-#{$name}-h: var(--s-#{$color}-h);
  --s-#{$name}-l: calc(var(--s-#{$color}-l) + #{$lightness});
  --s-#{$name}-s: var(--s-#{$color}-s);
  --s-#{$name}-a: var(--s-#{$color}-a);
}
```

Color that based on `primary-color` for example `secondary-color` is built from the css variables:

```css
:root, :host {
  --s-secondary-color-h: var(--s-primary-color-h);
  --s-secondary-color-l: calc(var(--s-primary-color-l) + 37.5%);
  --s-secondary-color-s: var(--s-primary-color-s);
  --s-secondary-color-a: var(--s-primary-color-a);
}
```

CSS variables that are based on others are also defined in both `:root` and `:host`.

```scss
// src/_css-variables.scss
:root, :host {
  // Core colors.
  @include define-color-based-on('primary-color-dark', 'primary-color', $lightness: -3%); // darken($primary-color, 3%)
  @include define-color-based-on('primary-color-light', 'primary-color', $lightness: +3%); // lighten($primary-color, 3%)

  @include define-color-based-on('secondary-color', 'primary-color', $lightness: +37.5%); // lighten($primary-color, 37.5%) !default;
  @include define-color-based-on('secondary-color-dark', 'secondary-color', $lightness: -3%); // darken($secondary-color, 3%) !default;
  @include define-color-based-on('secondary-color-light', 'secondary-color', $lightness: +3%); // lighten($secondary-color, 3%) !default;

  // gray-color
  @include define-color-based-on('gray-color', 'dark-color', $lightness: +55%); // lighten($dark-color, 55%)
  @include define-color-based-on('gray-color-dark', 'gray-color', $lightness: -30%); // darken($gray-color, 30%)
  @include define-color-based-on('gray-color-light', 'gray-color', $lightness: +20%); // lighten($gray-color, 20%)

  // border-color
  @include define-color-based-on('border-color', 'dark-color', $lightness: +65%); // lighten($dark-color, 65%)
  @include define-color-based-on('border-color-dark', 'border-color', $lightness: -10%); // darken($border-color, 10%)
  @include define-color-based-on('border-color-light', 'border-color', $lightness: +8%); // lighten($border-color, 8%)

  // bg-color
  @include define-color-based-on('bg-color', 'dark-color', $lightness: +75%); // lighten($dark-color, 75%)
  @include define-color-based-on('bg-color-dark', 'bg-color', $lightness: -3%); // darken($bg-color, 3%)
  @include define-color-based-on('bg-color-light', 'light-color'); // $light-color

  @include define-color-based-on('body-bg-color', 'bg-color-light'); // $bg-color-light
  @include define-color-based-on('body-font-color', 'dark-color', $lightness: +5%); // lighten($dark-color, 5%)

  @include define-color-based-on('link-color', 'primary-color'); // $primary-color
  @include define-color-based-on('link-color-dark', 'link-color', $lightness: -10%); // darken($link-color, 10%)
  @include define-color-based-on('link-color-light', 'link-color', $lightness: +10%); // lighten($link-color, 10%)
}
```

Colors are read by the function `color($name, $hue: 0deg, $lightness: 0%, $saturation: 0%, $alpha: 1)`.

```scss
// src/functions/_color.scss
// Color variable.
@function color($name, $hue: 0deg, $lightness: 0%, $saturation: 0%, $alpha: 1) {
  @return hsla(
    calc(var(--s-#{$name}-h) + #{$hue}),
    calc(var(--s-#{$name}-s) + #{$saturation}),
    calc(var(--s-#{$name}-l) + #{$lightness}),
    calc(var(--s-#{$name}-a) * #{$alpha})
  );
}
```

For example `primary-color` or `primary-color-dark`:

```scss
@use 'node_modules/@angular-package/spectre.css/functions' as *;

.primary-color {
  background: color('primary-color');
}

.primary-color-dark {
  background: color('primary-color-dark');
}
```

## Helper class

There is temporary class to help handle css variables `CssPropertyColor` and here is example usage of it:

First, you need to initialize the color you want to handle.

```typescript
import { CssPropertyColor } from '@angular-package/spectre.css';

const primary = new CssPropertyColor(
  'primary', // Name of the color in the CSS variable --s-primary, `color` is added automatically.
  's' // Prefix s in the CSS variable --s
);
```

Get the hex of the `primary` color:

```typescript
import { CssPropertyColor } from '@angular-package/spectre.css';

const primary = new CssPropertyColor(
  'primary', // Name of the color in the CSS variable --s-primary, `color` is added automatically.
  's' // Prefix s in the CSS variable --s
);

console.log(primary.getHex()); // #5755d9

// Get the shade `light` of the `primary` color.
console.log(primary.getHex('light')); // #6362dc

// Get the shade `dark` of the `primary` color.
console.log(primary.getHex('dark')); // #4b48d6
```

Set the color dynamically in the spectre.css:

```typescript
import { CssPropertyColor } from '@angular-package/spectre.css';

const primary = new CssPropertyColor(
  'primary', // Name of the color in the CSS variable --s-primary, `color` is added automatically.
  's' // Prefix s in the CSS variable --s
);

primary.setHex('#aaaaaa');

console.log(primary.getHex()); // #aaaaaa

// Get the shade `light` of the `primary` color.
console.log(primary.getHex('light')); // #b2b2b2

// Get the shade `dark` of the `primary` color.
console.log(primary.getHex('dark')); // #a2a2a2
```

It's possible to change the shade of the color:

```typescript
import { CssPropertyColor } from '@angular-package/spectre.css';

const primary = new CssPropertyColor(
  'primary', // Name of the color in the CSS variable --s-primary, `color` is added automatically.
  's' // Prefix s in the CSS variable --s
);

primary.setHex('#aaaaaa', 'light');
console.log(primary.getHex('light')); // #aaaaaa
```

with the CSS variable result:

```css
// style.attribute
--s-primary-color-light-h: 0deg;
--s-primary-color-light-l: 66.6667%;
--s-primary-color-light-s: 0%;
```

## Documentation and examples

### Elements

- [Typography](https://picturepan2.github.io/spectre/elements/typography.html)
- [Tables](https://picturepan2.github.io/spectre/elements/tables.html)
- [Buttons](https://picturepan2.github.io/spectre/elements/buttons.html)
- [Forms](https://picturepan2.github.io/spectre/elements/forms.html)
- [Icons.css](https://picturepan2.github.io/icons.css) - CSS ONLY
- [Labels](https://picturepan2.github.io/spectre/elements/labels.html)
- [Code](https://picturepan2.github.io/spectre/elements/code.html)
- [Media](https://picturepan2.github.io/spectre/elements/media.html)

### Layout

- [Flexbox grid](https://picturepan2.github.io/spectre/layout/grid.html) 
- [Responsive](https://picturepan2.github.io/spectre/layout/responsive.html)
- [Hero](https://picturepan2.github.io/spectre/layout/hero.html)
- [Navbar](https://picturepan2.github.io/spectre/layout/navbar.html)

### Components

- [Accordions](https://picturepan2.github.io/spectre/components/accordions.html)
- [Avatars](https://picturepan2.github.io/spectre/components/avatars.html)
- [Badges](https://picturepan2.github.io/spectre/components/badges.html)
- [Breadcrumbs](https://picturepan2.github.io/spectre/components/breadcrumbs.html)
- [Bars](https://picturepan2.github.io/spectre/components/bars.html)
- [Cards](https://picturepan2.github.io/spectre/components/cards.html)
- [Chips](https://picturepan2.github.io/spectre/components/chips.html)
- [Empty states](https://picturepan2.github.io/spectre/components/empty.html)
- [Menu](https://picturepan2.github.io/spectre/components/menu.html)
- [Nav](https://picturepan2.github.io/spectre/components/nav.html)
- [Modals](https://picturepan2.github.io/spectre/components/modals.html)
- [Pagination](https://picturepan2.github.io/spectre/components/pagination.html)
- [Panels](https://picturepan2.github.io/spectre/components/panels.html)
- [Popovers](https://picturepan2.github.io/spectre/components/popovers.html)
- [Steps](https://picturepan2.github.io/spectre/components/steps.html)
- [Tabs](https://picturepan2.github.io/spectre/components/tabs.html)
- [Tiles](https://picturepan2.github.io/spectre/components/tiles.html)
- [Toasts](https://picturepan2.github.io/spectre/components/toasts.html)
- [Tooltips](https://picturepan2.github.io/spectre/components/tooltips.html)

### Utilities

- [Utilities](https://picturepan2.github.io/spectre/utilities.html) - colors, display, divider, loading, position, shapes and text utilities

### Experimentals

- [360-Degree Viewer](https://picturepan2.github.io/spectre/experimentals/viewer-360.html) - CSS ONLY
- [Autocomplete](https://picturepan2.github.io/spectre/experimentals/autocomplete.html)
- [Calendars](https://picturepan2.github.io/spectre/experimentals/calendars.html)
- [Carousels](https://picturepan2.github.io/spectre/experimentals/carousels.html) - CSS ONLY
- [Comparison Sliders](https://picturepan2.github.io/spectre/experimentals/comparison.html) - CSS ONLY
- [Filters](https://picturepan2.github.io/spectre/experimentals/filters.html) - CSS ONLY
- [Meters](https://picturepan2.github.io/spectre/experimentals/meters.html)
- [Off-canvas](https://picturepan2.github.io/spectre/experimentals/off-canvas.html) - CSS ONLY
- [Parallax](https://picturepan2.github.io/spectre/experimentals/parallax.html) - CSS ONLY
- [Progress](https://picturepan2.github.io/spectre/experimentals/progress.html)
- [Sliders](https://picturepan2.github.io/spectre/experimentals/sliders.html)
- [Timelines](https://picturepan2.github.io/spectre/experimentals/timelines.html)

## Browser support

Spectre uses [Autoprefixer](https://github.com/postcss/autoprefixer) to make most styles compatible with earlier browsers and [Normalize.css](https://necolas.github.io/normalize.css/) for CSS resets. Spectre is designed for modern browsers. For best compatibility, these browsers are recommended:

- Chrome (LAST 4)
- Microsoft Edge (LAST 4)
- Firefox (EXTENDED SUPPORT RELEASE)
- Safari (LAST 4)
- Opera (LAST 4)
- Internet Explorer 10+

Spectre supports Internet Explorer 10+, but some HTML5 and CSS3 features are not perfectly supported by Internet Explorer.

Designed and built with ♥ by [Yan Zhu](https://twitter.com/picturepan2). Feel free to submit a pull request. Help is always appreciated.
