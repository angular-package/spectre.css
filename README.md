# angular-package

<a href='https://angular-package.dev' target='_blank'>
  <img align="right"  width="92" height="92" src="https://avatars.githubusercontent.com/u/31412194?s=400&u=c9929aa36826318ccac8f7b84516e1ce3af7e21c&v=4" />
</a>

The angular-package supports the development process of [angular](https://angular.io)-based applications in varied ways through the thoughtful, reusable, easy-to-use small pieces of code called packages.

<br>

<a href="https://picturepan2.github.io/spectre">
  <img src="https://picturepan2.github.io/spectre/img/spectre-logo.svg" width="72" height="72">
</a>

## Spectre.css

[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)

**This Spectre.css is maintained by the [`@angular-package`](https://www.npmjs.com/package/@angular-package/spectre.css).**

> Feel free to submit a pull request. Help is always appreciated.

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

## Major changes

### @Use ready

We can read [here](https://sass-lang.com/documentation/at-rules/import), that the **Sass** team is going to remove `@import` from the engine in the next few years, and `@angular-package/spectre.css` is rewritten to use `@forward` and `@use`.

### CSS variables

Almost all SCSS variables have their equivalent CSS variables, meaning that SCSS variables are only used to define CSS variables and the CSS variables are used in styles instead of SCSS, which results in the ability to change them on the fly without pre-loading.

## Import

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

## SCSS/CSS variables

### CSS variable name prefix

Each CSS variable name structure is defined as follows.

```css
--#{$var-prefix}-#{$name}
```

It's possible to customize the CSS variable names with the SCSS variable `$var-prefix`. By default, it's set to `s`.

```scss
// src/_variables.scss
$var-prefix: 's';
```

For example, default CSS variable `--s-control-padding-x` can be changed to `--spectre-control-padding-x` after change the `$var-prefix: 'spectre';`

### Settable colors

Settable colors with a specific **hex** on which some others are based.

```scss
// src/_variables.scss
// Core colors
$accent-color: #9932CC !default; // CSS variable.
$dark-color: #303742 !default; // CSS variable.
$light-color: #fff !default; // CSS variable.
$primary-color: #5755d9 !default; // CSS variable.

// Control colors
$disabled-color: $bg-color-dark !default; // ! CSS Variable. New control color.
$error-color: #e85600 !default; // CSS variable.
$info-color: #d9edf7 !default; // CSS variable.
$success-color: #32b643 !default; // CSS variable.
$warning-color: #ffb700 !default; // CSS variable.

// Background colors
$bg-color-light: $light-color !default; // CSS variable.

// Link colors
$link-color: $primary-color !default; // CSS variable.

// Other colors
$code-color: #d73e48 !default; // CSS variable.
$highlight-color: #ffe9b3 !default; // CSS variable.

// Body colors
$body-bg: $bg-color-light !default; // CSS variable.
```

Colors that are based on the **hex** colors above.

```scss
// src/_variables.scss
// Core colors
// Primary.
$primary-color-dark: darken($primary-color, 3%) !default; // CSS variable.
$primary-color-light: lighten($primary-color, 3%) !default; // CSS variable.

// Secondary.
$secondary-color: lighten($primary-color, 37.5%) !default; // CSS variable.
$secondary-color-dark: darken($secondary-color, 3%) !default; // CSS variable.
$secondary-color-light: lighten($secondary-color, 3%) !default; // CSS variable.

// Gray colors
$gray-color: lighten($dark-color, 55%) !default; // CSS variable.
$gray-color-dark: darken($gray-color, 30%) !default; // CSS variable.
$gray-color-light: lighten($gray-color, 20%) !default; // CSS variable.

// Background colors
$bg-color: lighten($dark-color, 75%) !default; // CSS variable.
$bg-color-dark: darken($bg-color, 3%) !default; // CSS variable.

// Border colors
$border-color: lighten($dark-color, 65%) !default; // CSS variable.
$border-color-dark: darken($border-color, 10%) !default; // CSS variable.
$border-color-light: lighten($border-color, 8%) !default; // CSS variable.

// Link colors
$link-color-dark: darken($link-color, 10%) !default; // CSS variable.
$link-color-light: lighten($link-color, 10%) !default; // CSS variable.

// Body colors.
$body-font-color: lighten($dark-color, 5%) !default; // CSS variable.
```

## CSS properties/variables

### Scheme

The `color-scheme` variable is set to `normal`.

```scss
:root, :host {
  color-scheme: normal;
}
```

### CSS variable color structure

Each **hex** color has **four** CSS variables defined by the mixin `define-color($name, $color)`, split into hsl form, where suffix `h` indicates `hue`, `l` lightness, `s` saturation and `a` - alpha.

> By default, argument `$prefix` is equal to `$var-prefix`.

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
--s-primary-color-s: 63.4615384615%; // Saturation.
--s-primary-color-l: 59.2156862745%; // Lightness.
--s-primary-color-a: 1; // Alpha.
```

CSS variables are defined in both `:root` and `:host`. For example core colors.

```scss
// src/css-variables/_core-colors.scss
:root, :host {
  // Accent.
  @include define-color('accent-color', $accent-color); // #9932CC

  // Dark.
  @include define-color('dark-color', $dark-color); // #303742

  // Light.
  @include define-color('light-color', $light-color); // #ffffff

  // Primary.
  @include define-color('primary-color', $primary-color); // #5755d9
}
```

Each color that is based on **hex** color has **four** CSS variables defined by the mixin `define-color-based-on($name, $color, $lightness: 0%, $prefix)`, split into hsl form, where suffix `h` indicates `hue`, `l` lightness, `s` saturation and `a` - alpha.
> By default, argument `$prefix` is equal to `$var-prefix`.

```scss
// src/mixins/_define-color-based-on.scss
@mixin define-color-based-on($name, $color, $lightness: 0%, $prefix: $var-prefix) {
  @include set-var($name, get-var($color, $suffix: 'h'), $prefix, 'h');
  @include set-var($name, get-var($color, $suffix: 's'), $prefix, 's');
  @include set-var($name, calc(var(--#{$prefix}-#{$color}-l) + #{$lightness}), $prefix, 'l');
  @include set-var($name, get-var($color, $suffix: 'a'), $prefix, 'a');
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

CSS variables that are based on others are also defined in both `:root` and `:host`. For example core colors.

```scss
// src/css-variables/_core-colors.scss
:root, :host {
  // Primary.
  @include define-color-based-on('primary-color-dark', 'primary-color', $lightness: -3%); // darken($primary-color, 3%)
  @include define-color-based-on('primary-color-light', 'primary-color', $lightness: +3%); // lighten($primary-color, 3%)

  // Secondary.
  @include define-color-based-on('secondary-color', 'primary-color', $lightness: +37.5%); // lighten($primary-color, 37.5%) !default;
  @include define-color-based-on('secondary-color-dark', 'secondary-color', $lightness: -3%); // darken($secondary-color, 3%) !default;
  @include define-color-based-on('secondary-color-light', 'secondary-color', $lightness: +3%); // lighten($secondary-color, 3%) !default;
}
```

Colors are read by the function `color($name, $hue: 0deg, $lightness: 0%, $saturation: 0%, $alpha: 1, $prefix: $var-prefix)`.

```scss
// src/functions/_color.scss
// Get color from css variable.
@function color(
  $name,
  $hue: 0deg,
  $lightness: 0%,
  $saturation: 0%,
  $alpha: 1,
  $prefix: $var-prefix
) {
  @return hsla(
    calc(var(--#{$prefix}-#{$name}-h) + #{$hue}),
    calc(var(--#{$prefix}-#{$name}-s) + #{$saturation}),
    calc(var(--#{$prefix}-#{$name}-l) + #{$lightness}),
    calc(var(--#{$prefix}-#{$name}-a) * #{$alpha})
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

## Background colors

In the original Spectre.css, background colors are based on SCSS variables, but in [`@angular-package`](https://www.npmjs.com/package/@angular-package/spectre.css) Spectre.css they are based on CSS variables.
They are set the same way, by the `bg-color-variant()` mixin, but using respective SCSS variables to initialize and change the lightness of the background font color.

Original Spectre.css backgrounds are using the same SCSS variable name as the class name except one `.bg-gray`, which uses `$bg-color`.
This version, `$bg-color` SASS variable is used in the new background `.bg` class, and `.bg-gray` uses `$gray-color` to have consistent naming.

There are also new background `.bg-accent` (`$accent-color`), `.bg-gray-dark` (`$gray-color-dark`), `.bg-gray-light` (`$gray-color-light`), `.bg-info` (`$info-color`) classes that are consistent in Spectre.css naming convention, but
they are also `.bg-color-dark` (`$bg-color-dark`), `.bg-color-light` (`$bg-color-light`) that aren't.

```scss
/*
  Background colors
*/
// BG core colors
@include bg-color-variant('.bg', 'bg-color', $bg-color); // ! New color, it's an old .bg-gray
@include bg-color-variant('.bg-accent', 'accent-color', $accent-color); // ! New color.
@include bg-color-variant('.bg-dark', 'dark-color', $dark-color);
@include bg-color-variant('.bg-color-dark', 'bg-color-dark', $bg-color-dark); // ! New color that uses $bg-color-dark
@include bg-color-variant('.bg-light', 'light-color', $light-color);
@include bg-color-variant('.bg-color-light', 'bg-color-light', $bg-color-light); // ! New color that uses $bg-color-light
@include bg-color-variant('.bg-primary', 'primary-color', $primary-color);
@include bg-color-variant('.bg-secondary', 'secondary-color', $secondary-color);

/*
  Control colors.
*/
@include bg-color-variant('.bg-error', 'error-color', $error-color);
@include bg-color-variant('.bg-info', 'info-color', $info-color); // ! New color.
@include bg-color-variant('.bg-success', 'success-color', $success-color);
@include bg-color-variant('.bg-warning', 'warning-color', $warning-color);

/*
  Gray colors.
*/
@include bg-color-variant('.bg-gray', 'gray-color', $gray-color); // ? .bg-gray is not $bg-color but directly $gray-color.
@include bg-color-variant('.bg-gray-dark', 'gray-color-dark', $gray-color-dark); // ! New color.
@include bg-color-variant('.bg-gray-light', 'gray-color-light', $gray-color-light); // ! New color.
```

## Other variables

### Units

SCSS variables.

```scss
// src/_variables.scss
// Unit sizes.
$unit-o: 0.05rem !default; // ! New CSS variable.
$unit-h: 0.1rem !default; // ! New CSS variable.
$unit-1: 0.2rem !default; // ! New CSS variable.
$unit-2: 0.4rem !default; // ! New CSS variable.
$unit-3: 0.6rem !default; // ! New CSS variable.
$unit-4: 0.8rem !default; // ! New CSS variable.
$unit-5: 1rem !default; // ! New CSS variable.
$unit-6: 1.2rem !default; // ! New CSS variable.
$unit-7: 1.4rem !default; // ! New CSS variable.
$unit-8: 1.6rem !default; // ! New CSS variable.
$unit-9: 1.8rem !default; // ! New CSS variable.
$unit-10: 2rem !default; // ! New CSS variable.
$unit-12: 2.4rem !default; // ! New CSS variable.
$unit-16: 3.2rem !default; // ! New CSS variable.
```

Equivalent CSS variables with default prefix `s`. Here we have the new variable `--s-unit-0`.

```css
// src/css-variables/_unit-sizes.scss
:root, :host {
  --s-unit-o: 0.05rem;
  --s-unit-h: 0.1rem;
  --s-unit-0: 0rem;
  --s-unit-1: 0.2rem;
  --s-unit-2: 0.4rem;
  --s-unit-3: 0.6rem;
  --s-unit-4: 0.8rem;
  --s-unit-5: 1rem;
  --s-unit-6: 1.2rem;
  --s-unit-7: 1.4rem;
  --s-unit-8: 1.6rem;
  --s-unit-9: 1.8rem;
  --s-unit-10: 2rem;
  --s-unit-12: 2.4rem;
  --s-unit-16: 3.2rem;
}
```

### Font sizes and line-height

SCSS variables.

```scss
// src/_variables.scss
$font-size: 0.8rem !default; // ! New CSS variable.
$font-size-lg: 0.9rem !default; // ! New CSS variable.
$font-size-sm: 0.7rem !default; // ! New CSS variable.
$html-font-size: 20px !default; // ! New CSS variable.
$html-line-height: 1.5 !default; // ! New CSS variable.
$line-height: 1.2rem !default; // ! New CSS variable.
```

Equivalent CSS variables with default prefix `s`.

```css
// src/css-variables/_font-size.scss
:root, :host {
  --s-font-size: 0.8rem;
  --s-font-size-lg: 0.9rem;
  --s-font-size-sm: 0.7rem;
  --s-html-font-size: 20px;
  --s-html-line-height: 1.5;
  --s-line-height: 1.2rem;
}
```

### Layout spacing

SCSS variables.

```scss
// src/_variables.scss
$layout-spacing: $unit-2 !default; // ! New CSS variable.
$layout-spacing-sm: $unit-1 !default; // ! New CSS variable.
$layout-spacing-lg: $unit-4 !default; // ! New CSS variable.
```

Equivalent CSS variables with default prefix `s`.

> This property is set without a unit because it's used in calculation with a different unit (`px`).

```css
:root, :host {
  --s-layout-spacing: 0.4;
  --s-layout-spacing-lg: 0.8;
  --s-layout-spacing-sm: 0.2;
  --s-layout-spacing-unit: 1rem;
}
```

### Border

SCSS variables.

```scss
// src/_variables.scss
// Border radius.
$border-radius: $unit-h !default; // ! New CSS variable.

// Border width.
$border-width: $unit-o !default; // ! New CSS variable.
$border-width-lg: $unit-h !default; // ! New CSS variable.
```

Equivalent CSS variables with default prefix `s`.

```css
:root, :host {
  --s-border-radius: 0.1rem;
  --s-border-width: 0.05rem;
  --s-border-width-lg: 0.1rem;
}
```

### Control

SCSS variables.

```scss
// src/_variables.scss
// Control size.
$control-size: $unit-9 !default; // ! New CSS variable.
$control-size-lg: $unit-10 !default; // ! New CSS variable.
$control-size-sm: $unit-7 !default; // ! New CSS variable.

// Control padding.
$control-padding-x: $unit-2 !default; // ! New CSS variable.
$control-padding-x-lg: $unit-2 * 1.5 !default; // ! New CSS variable.
$control-padding-x-sm: $unit-2 * 0.75 !default; // ! New CSS variable.
$control-padding-y: ($control-size - $line-height) * 0.5 - $border-width !default; // ! New CSS variable.
$control-padding-y-lg: ($control-size-lg - $line-height) * 0.5 - $border-width !default; // ! New CSS variable.
$control-padding-y-sm: ($control-size-sm - $line-height) * 0.5 - $border-width !default; // ! New CSS variable.

// Control icon.
$control-icon-size: 0.8rem !default; // ! New CSS variable.

// Control width.
$control-width-lg: 960px !default; // ! New CSS variable.
$control-width-md: 640px !default; // ! New CSS variable.
$control-width-sm: 320px !default; // ! New CSS variable.
$control-width-xl: 1280px !default; // ! New CSS variable. Not used.
$control-width-xs: 180px !default; // ! New CSS variable.
```

Equivalent CSS variables with default prefix `s`.

```css
:root, :host {
  // Control size.
  --s-control-size: 1.8rem;
  --s-control-size-lg: 2rem;
  --s-control-size-sm: 1.4rem;

  // Control padding.
  --s-control-padding-x: 0.4rem;
  --s-control-padding-x-lg: calc(var(--s-control-padding-x) * 1.5);
  --s-control-padding-x-sm: calc(var(--s-control-padding-x) * 0.75);
  --s-control-padding-y: calc((var(--s-control-size) - var(--s-line-height)) * 0.5 - var(--s-border-width));
  --s-control-padding-y-lg: calc((var(--s-control-size-lg) - var(--s-line-height)) * 0.5 - var(--s-border-width));
  --s-control-padding-y-sm: calc((var(--s-control-size-sm) - var(--s-line-height)) * 0.5 - var(--s-border-width));

  // Control icon size.
  --s-control-icon-size: 0.8rem;

  // Control width.
  --s-control-width-lg: 960px;
  --s-control-width-md: 640px;
  --s-control-width-sm: 320px;
  --s-control-width-xl: 1280px;
  --s-control-width-xs: 180px;
}
```

### Responsive breakpoints

```scss
// src/_variables.scss
// Responsive breakpoints.
$size-2x: 1440px !default; // ! New CSS variable.
$size-lg: 960px !default; // ! New CSS variable.
$size-md: 840px !default; // ! New CSS variable.
$size-sm: 600px !default; // ! New CSS variable.
$size-xl: 1280px !default; // ! New CSS variable.
$size-xs: 480px !default; // ! New CSS variable.

$responsive-breakpoint: $size-xs !default; // ! New CSS variable.
```

```css
:root, :host {
  --s-size-2x: 1440px;
  --s-size-lg: 960px;
  --s-size-md: 840px;
  --s-size-sm: 600px;
  --s-size-xl: 1280px;
  --s-size-xs: 480px;

  --s-responsive-breakpoint: 480px;
}
```

### z-index

SCSS variables.

```scss
// Z-index.
$zindex-0: 1 !default; // ! New CSS variable.
$zindex-1: 100 !default; // ! New CSS variable.
$zindex-2: 200 !default; // ! New CSS variable.
$zindex-3: 300 !default; // ! New CSS variable.
$zindex-4: 400 !default; // ! New CSS variable.
```

Equivalent CSS variables with default prefix `s`.

```css
:root, :host {
  --s-z-index-0: 1;
  --s-z-index-1: 100;
  --s-z-index-2: 200;
  --s-z-index-3: 300;
  --s-z-index-4: 400;
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
