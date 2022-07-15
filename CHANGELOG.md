# Spectre.css changelog

## v1.0.0-alpha.3

- Add new `toast-class-variant()` and `label-class-variant()` mixins. [87ebe64] [e6d2ac8] [921dc86] [fdbe64b]
- Add sass variable `$transition-duration` and css variable `transition-duration` of the default value equal to `0.2s` and use in styles. [1db668c]
- Add text and bg color variants. [8e6822e]
- Add mixin `box-shadow-side()` to include sided box-shadow. [c010f4c]
- Add toasts `accent`, `dark`, `disabled`, `gray`, `gray-dark`, `gray-light`, `info`, `light`, and `secondary` colors. [b5b3e0e]
- Add label colors, `accent`, `dark`, `light`, `disabled`, `info`. [ed96a91]
- Add missing mixins and add new. [845c528] [cc720f9]

[fdbe64b]: https://github.com/angular-package/spectre.css/commit/fdbe64b7c57b27da26f2aba3e0a16f4a1a5653a6
[921dc86]: https://github.com/angular-package/spectre.css/commit/921dc86e2e1ca9ddf299948235e4bd55f4626505
[e6d2ac8]: https://github.com/angular-package/spectre.css/commit/e6d2ac8e1d6991e30d75193b685b3cee6c12667f
[87ebe64]: https://github.com/angular-package/spectre.css/commit/87ebe641e4d61d8d89caa5f6856b96da01013d1f
[1db668c]: https://github.com/angular-package/spectre.css/commit/1db668c108f9b29d54295ad06bce90e8f3516971
[8e6822e]: https://github.com/angular-package/spectre.css/commit/8e6822ef0394e406ddb1a6914a7f6059a744f837
[c010f4c]: https://github.com/angular-package/spectre.css/commit/c010f4cd0443463be40462b2d2e79cf5cab5bffd
[b5b3e0e]: https://github.com/angular-package/spectre.css/commit/b5b3e0edc357de160936b90f8a78924a7cf4b37f
[ed96a91]: https://github.com/angular-package/spectre.css/commit/ed96a917e014d6000e94d1f3d03ff54adffb70f6
[845c528]: https://github.com/angular-package/spectre.css/commit/845c5287983b7054e158df491dd708f0a44f3466
[cc720f9]: https://github.com/angular-package/spectre.css/commit/cc720f9d3bc67e617d190611f20684e6805fda42

## v1.0.0-alpha.2

- Update `define-color()` mixin by adding `$alpha` parameter. [5a4f317]
- Update CSS variable `body-bg-color` to use SCSS variable `$body-bg-color` instead of basing on `bg-color-light`. [c529aa9]
- Change the `$body-bg` SCSS variable to `$body-bg-color`. [d6b582f]
- Move parallax variables into `_variables.scss` and add to CSS variables. [5b2c0b4] [84f247c]
- Remove `$grid-spacing` in `_layout.scss` in favor of CSS variables calculation.
- Update forms state disabled to use `disabled-color` instead `bg-color-dark` and the color is assigned to `background-color` not `background`.
- Update grid sizes to use CSS variables for size. [e875ec2]
- Add CSS variables for z-index and responsive breakpoint. [53a9c0e]
- Update styles to use CSS variable of the z-index. [7d7d6da]
- Update styles to use `get-var()` to use CSS variables instead of Sass variables, change `avatar-base()` mixin parameters to string to use CSS variables. Calculate grid sizes with css variables. [5f2714e]
- Update styles to use `get-var()` function and update including mixins to use string parameters of CSS variables. [7381a86]
- Add `set-var()` mixin to define variable with a specified `$prefix` and optional `$suffix`. [8ad9180]
- Use `get-var()` Sass function to use CSS variables instead of scss variables in the `margin-variant()` and `padding-variant()` mixins. [32dfd63]
- Update `define-color()` and `define-color-based-on()` mixin to use `set-var()` Sass function to define CSS variables. [5bc2df3] [bed18ef]
- Update `avatar-base()` mixin to use CSS variables by adding `get-var()` function. [c829c8b]
- Fix `Color` class by adding `Math.round()` to the `color: number` argument to properly calculate hex. [8e53827]
- Add `var-negative()` Sass function to make the given value negative by multiply `-1`. [08c9bae]
- Add `strip-unit()` Sass function to strip unit from the given value. [8c48cf1]
- Add `get-var()` Sass function to get CSS variable with prefix and/or unit. [f6da5fa]
- Update `color()` mixin by adding argument `$prefix` to use `$var-prefix` for CSS variable name customization. [7e84edc]
- Add CSS variables `border-width`, `border-radius`, `control-padding-x`, `control-padding-y`, `control-icon-size`, `control-size`, `control-width`, `font-size`, `html-font-size`, `html-line-height`, `line-height`, `layout-spacing`,`unit-o`, `unit-h`, and `unit-0` to `unit-16`. [dfdc843]
- Separate defining CSS variables into different files. [b82878c]
- Add `$var-prefix` to customize CSS variable name, add `$disabled-color` SCSS variable. [7623233]
- Add CSS variables `font-size`, `html-font-size`, `html-line-height`, `line-height`. [4cddda6]

[d6b582f]: https://github.com/angular-package/spectre.css/commit/d6b582f3ad97256ad646745c38c6fca489c5d025
[5a4f317]: https://github.com/angular-package/spectre.css/commit/5a4f3174d5161ddd3c9dfaf6e47d4264c8939fe3
[c529aa9]: https://github.com/angular-package/spectre.css/commit/c529aa9838db68458aa0f2624be37cad8047b3b7
[5b2c0b4]: https://github.com/angular-package/spectre.css/commit/5b2c0b484d7ddbbeb5a8fa88ce3164eb49e767ff
[84f247c]: https://github.com/angular-package/spectre.css/commit/84f247c73350980c94f6bf8f48e243c98e73a4fb
[e875ec2]: https://github.com/angular-package/spectre.css/commit/e875ec2a4500070e63fac020634cc053e9e3d232
[53a9c0e]: https://github.com/angular-package/spectre.css/commit/53a9c0e49a61fec5f1690b94fea8e4aae2fbe38a
[7d7d6da]: https://github.com/angular-package/spectre.css/commit/7d7d6da41503800ac25c739b3f73b0d3278f2319
[5f2714e]: https://github.com/angular-package/spectre.css/commit/5f2714eb17581086197b30ee6e39e4b3fcee1c45
[7381a86]: https://github.com/angular-package/spectre.css/commit/7381a866e4cd8662127b5331816a69222a520ee0
[8ad9180]: https://github.com/angular-package/spectre.css/commit/8ad91804cc29d8e33f70649c1c5e052b1dd2d061
[32dfd63]: https://github.com/angular-package/spectre.css/commit/32dfd633a98b82294ad32dbfc784ca7902e6a183
[bed18ef]: https://github.com/angular-package/spectre.css/commit/bed18ef8c4d6fc59ada4f68b610f22ba148626e6
[5bc2df3]: https://github.com/angular-package/spectre.css/commit/5bc2df37f32bf6fbb8495169b6f2722de90f042b
[c829c8b]: https://github.com/angular-package/spectre.css/commit/c829c8b3f38606bb3be101edef24bcc69f4cca03
[8e53827]: https://github.com/angular-package/spectre.css/commit/8e53827e0261a25d5ddde9413cb94bd1c41563c4
[08c9bae]: https://github.com/angular-package/spectre.css/commit/08c9baed86976ec17567611dde26428a81197543
[8c48cf1]: https://github.com/angular-package/spectre.css/commit/8c48cf119a87d54264968858a450c15b9992d969
[f6da5fa]: https://github.com/angular-package/spectre.css/commit/f6da5fa038a77351f8d3e1c4f973a09e4a30e1df
[7e84edc]: https://github.com/angular-package/spectre.css/commit/7e84edc7a38c73902db6e16456e7628e903ad1d0
[dfdc843]: https://github.com/angular-package/spectre.css/commit/dfdc8438ca56c9c8848a6a69ad726f05de8ac032
[b82878c]: https://github.com/angular-package/spectre.css/commit/b82878c8c0c891f9aed35e01db9df1c141e8c3f1
[7623233]: https://github.com/angular-package/spectre.css/commit/7623233663646b5c313365e518d70f527405a8fd
[4cddda6]: https://github.com/angular-package/spectre.css/commit/4cddda6a90da727e641c10dc5fa5c5dc2b743e49

##### v1.0.0-alpha.1

- Change file name from general `function/_css-variable-color.scss` to just `functions/_color.scss`. [a8b14ac]
- Move mixins from `mixins/_css-variable-color.scss` to separate files `_define-color.scss` and `_define-color-based-on.scss`. [e9bb18b]
- Change folder name from `function` to `functions` for Spectre.css naming consistency. [4582370]
- Change `.bg-gray` to use `$bg-gray` SCSS variable instead of `$bg-color`. [ebd492c]
- Fix includes mixin `bg-color-variant()` by adding missing sass variables. [ebd492c]
- New background class colors `.bg-color-dark` and `.bg-color-light`. [fb1224c]
- Fix variable name from `$lighten` to `$lightness` in `textarea.form-input`. [54790ae]
- Update missing `color()` function in styles and use prettier on files. [aed7fe0]
- Update sass variable name to css style and add `!important` to `text-color-variant` mixin. [03713ee]

[a8b14ac]: https://github.com/angular-package/spectre.css/commit/a8b14acd49be4e82eb387dfde0b964e7a41bd664
[e9bb18b]: https://github.com/angular-package/spectre.css/commit/e9bb18b9ac4c47b40368f2d8a09e82476e08390b
[4582370]: https://github.com/angular-package/spectre.css/commit/4582370757b32c2af3e2e138974485e7f35144de
[fb1224c]: https://github.com/angular-package/spectre.css/commit/fb1224c6799f0d6abdf992396e09b6d547f27e75
[95648b3]: https://github.com/angular-package/spectre.css/commit/95648b379eb18437dbd15bd07ce6d6daf0c5c3fa
[54790ae]: https://github.com/angular-package/spectre.css/commit/54790aef0bdf578d7aa2e6aeb01f1da905a00189
[aed7fe0]: https://github.com/angular-package/spectre.css/commit/aed7fe0be311f9101a9c92767d244a2caca24d82
[ebd492c]: https://github.com/angular-package/spectre.css/commit/ebd492c0cc835cde005e3fac371404461bec1b77
[03713ee]: https://github.com/angular-package/spectre.css/commit/03713ee038121d9b8a14c346c1dc08f4cf80f35a

##### v1.0.0-alpha

- Add helpers. [a3fac35]
- Update from #688.
- Update the mixins to use string parameters. [5cf16fa]
- Change the spectre.css variables and mixins to use `color()` function. [759feb] [978a9ba] [a89d3f7] [b8dd9c4] [4b5e065]
- Define CSS variables in HSL. [4ead2ca]
- Add `$accent-color` and `$info-color`. [5aebf31]
- Add function and mixins to handle CSS variables. [9d6c62a] [214c17e]
- Change `@import` in favor of `@use` and `@forward`. [4110d67] [6ad8904]

[a3fac35]: https://github.com/angular-package/spectre.css/commit/a3fac3576d32bcf518f4727aac1903364c27863c
[5cf16fa]: https://github.com/angular-package/spectre.css/commit/5cf16fa90bd93ea10c93f1e0d932e4bb7fe9351b

[4b5e065]: https://github.com/angular-package/spectre.css/commit/4b5e0659934abecb2024ec01c381a6654fa758d6
[b8dd9c4]: https://github.com/angular-package/spectre.css/commit/b8dd9c414c378ee49fa7e2d3823f7da88b9cb0e1
[a89d3f7]: https://github.com/angular-package/spectre.css/commit/a89d3f7eed3913f71096bb0c0443ee66a736d9ac
[978a9ba]: https://github.com/angular-package/spectre.css/commit/978a9baa33c6557d0c493c9768d1c4899d057ac9
[759feb7]: https://github.com/angular-package/spectre.css/commit/759feb7fc7ad180f8b0aa325b4b87c056a904adb

[4ead2ca]: https://github.com/angular-package/spectre.css/commit/4ead2caea86e6fbbb7ce7818f38df01e71e803b8
[5aebf31]: https://github.com/angular-package/spectre.css/commit/5aebf31192dbec68c727b834b643dd0e98a5aaec

[214c17e]: https://github.com/angular-package/spectre.css/commit/214c17e49f8d6dca342b69b1c1af75ea8eb80ab3
[9d6c62a]: https://github.com/angular-package/spectre.css/commit/9d6c62a9f162456d77cf7bcff20806465ab87f81

[6ad8904]: https://github.com/angular-package/spectre.css/commit/6ad89043b1b172697bdbb0d33a10a8b9e7f332b0
[4110d67]: https://github.com/angular-package/spectre.css/commit/4110d67227cb05e1c43b30a98cc8385f5a821b85

##### v0.5.10 [#](https://github.com/angular-package/spectre.css/releases/tag/v0.5.10)

- Add columns order #632.
- Add icons #535.
- Fix buttons visited style for `a` tag #572.
- Change box-shadow in the mixins.
- Add class `card-shadow` in the `_cards.scss`.

##### v0.5.9 [#](https://github.com/picturepan2/spectre/releases/tag/v0.5.9)

- Update gulp and dependencies
- Update docs, fixes typos, merging PRs, and add more examples like Hero layout and custom prefix
- Update column classes less verbose 
- Fix #619 by adding pointer-events to 3 dots
- Fix the behavior of class `loading` together with tooltip
- Only rotate the first child icon when accordion is open/close
- Add a "Reviewed by Hound" badge 

##### v0.5.8 [#](https://github.com/picturepan2/spectre/releases/tag/v0.5.8)

- IMPORTANT: Moving 
- Add Auto width column #541
- Add more Menu badge support #545
- Improve 360-Degree Viewer
- Fix gulp issue #547
- Fix the errors in the Docs #538

##### v0.5.7 [#](https://github.com/picturepan2/spectre/releases/tag/v0.5.7)

- Add pure CSS 360-Degree Viewer
- Improve Docs SEO
- Change Carousels image number to variable #428
- Fix Form textarea height issue

##### v0.5.6 [#](https://github.com/picturepan2/spectre/releases/tag/v0.5.6)

- Add Docs Search #509 #291
- Add Copy icon
- Add Hero layout #380
- Add multiline Tooltips #500
- Replace transition: all; #526
- Fix #511 issue
- Fix sidebar background height for short docs pages

##### v0.5.5 [#](https://github.com/picturepan2/spectre/releases/tag/v0.5.5)

- IMPORTANT: New Docs
- Add Changelog to What's New section
- Fix chip vertical scrollbar #521
- Fix circle -> s-circle #489
- Fix code font-family issue for asian languages #476

##### v0.5.4 [#](https://github.com/picturepan2/spectre/releases/tag/v0.5.4)

- IMPORTANT: Change naming of position utilities to avoid conflicts
- Update dark color variable
- Fix sidebar hash link bug #482
- Fix browser support typo #469
- Fix code typo #460
- Fix GitHub button z-index bug #458
- Fix Bar background color issue by adding !important to color utilities
- Fix chip bug when content is too long #506
- Fix multiple select height bug #508

##### v0.5.3 [#](https://github.com/picturepan2/spectre/releases/tag/v0.5.3)

- Add dark text color to utilities
- Add error state to the indeterminate checkbox
- Add inline forms
- Add more code examples
- Fix errors in the Docs

##### v0.5.2 [#](https://github.com/picturepan2/spectre/releases/tag/v0.5.2)

- IMPORTANT:  Move Docs to Pug templates
- Add more Docs examples
- Add visited link style
- Add 100% modal height class #391
- Fix off-canvas-overlay bug #392
- Fix margin and padding values #431
- Fix Accordion example #438
- Fix a bug of input addons width on mobile devices #449
- Separate Simplified Chinese (zh/zh-Hans) from Traditional (zh-Hant)

##### v0.5.1 [#](https://github.com/picturepan2/spectre/releases/tag/v0.5.1)

IMPORTANT: Move Autocomplete to the Experimentals
- Add form checkbox, radio and switch support to Menus
- Add responsive horizontal form support #375
- Add Favicons in the docs #398
- Fix Off-canvas z-index problem #361
- Fix icons disappearing on group classes on focus
- Fix Deprecation Warning #396 #356
- Initial commit of RTL support (not finished)

##### v0.5.0 [#](https://github.com/picturepan2/spectre/releases/tag/v0.5.0)

- IMPORTANT: Restore /dist folder
- Add Grid nesting example #353
- Add Form control sizes support
- Update Off-canvas default behavior and new option available #347
- Split Mixins
- Fix Navbar last-child align right bug #346
- Fix modal doc typo
- Fix docs examples #348

##### v0.4.7 [#](https://github.com/picturepan2/spectre/releases/tag/v0.4.7)

- Add new button colors (success and error) #227 #241 #342
- Add overflow-scrolling: touch; CSS for better scrolling
- Add touch support to Parallax image hover effect
- Update the Modal example code
- Fix form horizontal layout spacing

##### v0.4.6 [#](https://github.com/picturepan2/spectre/releases/tag/v0.4.6)

- Add new Sliders example #328
- Add Table with horizontal scroll support #333
- Update Calendar event style which makes use of color utilities #326 
- Define $parallax-fade-color as default variable #332
- Fix the Docs content mistake
- Fix breadcrumb-item extra spacing #337
- Fix comparison slider image responsive bug #338

##### v0.4.5 [#](https://github.com/picturepan2/spectre/releases/tag/v0.4.5)

- Rewrite Off-canvas component
- Add `active` support to the Off-canvas #308
- Update the Docs pages

##### v0.4.4 [#](https://github.com/picturepan2/spectre/releases/tag/v0.4.4)

- IMPORTANT: Increase default font sizes to 16px #271
- Add version number to CSS #288 #289

##### v0.4.3 [#](https://github.com/picturepan2/spectre/releases/tag/v0.4.3)

- Add Icon Sizes #284
- Add Large Modals #293
- Update primary color to #5755d9
- Change Tooltips `white-space` to `pre` #292
- Encode SVG Data URI (thanks to @mariodev) #297 #298
- Improve Buttons and Forms small and large variables
- Improve Filters code
- Improve gulpfile and package
- Add Importing Sass Docs

##### v0.4.2 [#](https://github.com/picturepan2/spectre/releases/tag/v0.4.2)

- Add Off-screen experimental
- Fix Docs rendering bug in Safari


##### v0.4.1 [#](https://github.com/picturepan2/spectre/releases/tag/v0.4.1)

- Add default modifier to all variables 
- Add `address` reset which changes font-style to normal
- Add Details and Summary Accordions support
- Fix responsive video
- Update the Docs

##### v0.4.0 [#](https://github.com/picturepan2/spectre/releases/tag/v0.4.0)

- Switch from Less to Sass
- Add Cursor utilities

##### v0.3.2 [#](https://github.com/picturepan2/spectre/releases/tag/v0.3.2)

- Add label-rounded classes
- Add Avatars presence status code
- Add Typography Fonts Docs
- Add Button variant mixins
- Update Autocomplete style
- Update Autoprefixer rules
- Update label mixin and code mono font family

##### v0.3.1 [#](https://github.com/picturepan2/spectre/releases/tag/v0.3.1)

*IMPORTANT*: The default root font-size has been changed to `20px`, please update your `rem` numbers if you're using the custom sizes. [Learn more](https://picturepan2.github.io/spectre/getting-started/custom.html#variables-sizes).

- Fix margin and padding utilities bug
- Add grid offset
- Rename Display utilities class names
- Move Panels and Empty states to Components from Layout
- Fix Docs bugs and cleanup codes

##### v0.2.15 [#](https://github.com/picturepan2/spectre/releases/tag/v0.2.15)

- BIG Update to the Docs experience, completely rewritten and improved #240 
- Add Text and Background colors utilities #205 #219 
- Add Install from CDN option #191 
- Add unit size (4px) and unit size variables
- Add Responsive container (max width container) #222
- Add error and success states to checkbox, radio and switch #246 
- Fix Rem unit issue in East Asian Chrome #110 
- Fix icon direction bug #218
- Fix Dropdown menu max items/height #226 

##### v0.2.14 [#](https://github.com/picturepan2/spectre/releases/tag/v0.2.14)

- Add vertical divider
- Add Form icon support
- Add Accordions
- Add anchor links to Docs
- Add new container grid size
- Fix link error and typo

##### v0.2.13 [#](https://github.com/picturepan2/spectre/releases/tag/v0.2.13)

- Add Timelines code
- Add input readonly style
- Change Gulp building process and ignore /dist
- Change naming `danger` to `error`
- Change label-variant mixin
- Fix dropdown-toggle border radius in button groups
- Fix Calendars date item width bug under Firefox

##### v0.2.12 [#](https://github.com/picturepan2/spectre/releases/tag/v0.2.12)

- Add pure CSS Comparison Sliders
- Add pure CSS content Filters
- Add Avatars badge support
- Add more icons
- Change :focus support
- Change Docs image sizes and add object-fit support
- Update Navbar code
- Fix typos, Modals bugs

##### v0.2.11 [#](https://github.com/picturepan2/spectre/releases/tag/v0.2.11)

- Add pure CSS Popovers
- Add pure CSS Icons 
- Add Slider bars
- Add tvOS Parallax effect text layer
- Update shadow mixin

##### v0.2.10 [#](https://github.com/picturepan2/spectre/releases/tag/v0.2.10)

- Add Shadows and Z-index variables
- Add Divider text
- Improve color variables
- Cleanup components code
- Remove the Responsive Resizer tool (Moved to https://github.com/picturepan2/responsive-resizer)

##### v0.2.9 [#](https://github.com/picturepan2/spectre/releases/tag/v0.2.9)

- Add Panels layout: flexible view container layout with auto-expand content section
- Update Navbar layout
- Update docs and examples

##### v0.2.8 [#](https://github.com/picturepan2/spectre/releases/tag/v0.2.8)

- Add Carousels previous and next buttons
- Improve disabled state for forms
- Improve calendar events style
- Improve Sliders disabled style
- Improve Autocomplete menu position
- Merge Menus and Dropdowns

##### v0.2.7 [#](https://github.com/picturepan2/spectre/releases/tag/v0.2.7)

- Add Calendars experimental support
- Add tabindex note to the dropdowns docs
- Add shrink-to-fit=no to head meta
- Add Colors docs and update colors
- Fix wrong shadow colors with form-select
- Fix grid-480

##### v0.2.6 [#](https://github.com/picturepan2/spectre/releases/tag/v0.2.6)

- Add Carousels initial experimental version
- Add Spectre.css Twitter account (@spectrecss) link
- Improve Docs experience and navbar
- Fix the bug of form input focus colors

##### v0.2.5 [#](https://github.com/picturepan2/spectre/releases/tag/v0.2.5)

- Improve color variables completely
- Add Menu badges
- Add Responsive visibility (show-x)
- Add Parallax effect (pure CSS)
- Fix elements and components
- Update empty state layout code

##### v0.2.4 [#]    (https://github.com/picturepan2/spectre/releases/tag/v0.2.4)

- ADD: Meters element experimental support
- ADD: Progress indeterminate animation
- ADD: Text-decoration-skip support
- CHG: Split Codes and improve docs codes
- FIX: Steps with tooltips z-index bug

##### v0.2.3 [#](https://github.com/picturepan2/spectre/releases/tag/v0.2.3)

- Bars component
- Badges for buttons
- Experimentals CSS and docs
- Sliders experimental component
- A number of fixes as usual

##### v0.2.1 [#](https://github.com/picturepan2/spectre/releases/tag/v0.2.1)

I have updated the whole Spectre.css documents experience and bumped the version to v0.2.x. The new Docs can be viewed at https://picturepan2.github.io/spectre/. Here are the new things added:
- New Docs experience with better navigations and better mobile off-canvas menu
- New components: Tiles, Steps and Navs (part of Navigation)
- Improvements: Action button, Autocomplete, Pagination, Tabs, Breadcrumbs, Badges, Cards, new Progress experimental support
- Improvements: better focus style
- Fixes

##### v0.0.1 - March 2016

Initial commit

Thank you. ♥
