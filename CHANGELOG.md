#### Spectre.css Changelog

##### v1.0.0-alpha-1

- New background class colors `.bg-color-dark` and `.bg-color-light`. [fb1224c]
- Fix variable name from `$lighten` to `$lightness` in `textarea.form-input`. [54790ae]
- Update missing `color()` function in styles and use prettier on files. [aed7fe0]
- Fix includes mixin `bg-color-variant()` by adding missing sass variables. [ebd492c]
- Update sass variable name to css style and add `!important` to `text-color-variant` mixin. [03713ee]

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
