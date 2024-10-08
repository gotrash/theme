---
layout: docs
title: Contents
description: Discover what's included in GoTrash Theme, including our compiled and source code flavors.
group: getting-started
toc: true
---

## Compiled GoTrash Theme

Once downloaded, unzip the compressed folder and you'll see something like this:

<!-- NOTE: This info is intentionally duplicated in the README. Copy any changes made here over to the README too, but be sure to keep in mind to add the `dist` folder. -->

```text
bootstrap/
├── css/
│   ├── bootstrap-grid.css
│   ├── bootstrap-grid.css.map
│   ├── bootstrap-grid.min.css
│   ├── bootstrap-grid.min.css.map
│   ├── bootstrap-grid.rtl.css
│   ├── bootstrap-grid.rtl.css.map
│   ├── bootstrap-grid.rtl.min.css
│   ├── bootstrap-grid.rtl.min.css.map
│   ├── bootstrap-reboot.css
│   ├── bootstrap-reboot.css.map
│   ├── bootstrap-reboot.min.css
│   ├── bootstrap-reboot.min.css.map
│   ├── bootstrap-reboot.rtl.css
│   ├── bootstrap-reboot.rtl.css.map
│   ├── bootstrap-reboot.rtl.min.css
│   ├── bootstrap-reboot.rtl.min.css.map
│   ├── bootstrap-utilities.css
│   ├── bootstrap-utilities.css.map
│   ├── bootstrap-utilities.min.css
│   ├── bootstrap-utilities.min.css.map
│   ├── bootstrap-utilities.rtl.css
│   ├── bootstrap-utilities.rtl.css.map
│   ├── bootstrap-utilities.rtl.min.css
│   ├── bootstrap-utilities.rtl.min.css.map
│   ├── gotrash.css
│   ├── gotrash.css.map
│   ├── gotrash.min.css
│   ├── gotrash.min.css.map
│   ├── gotrash.rtl.css
│   ├── gotrash.rtl.css.map
│   ├── gotrash.rtl.min.css
│   └── gotrash.rtl.min.css.map
└── js/
    ├── gotrash.bundle.js
    ├── gotrash.bundle.js.map
    ├── gotrash.bundle.min.js
    ├── gotrash.bundle.min.js.map
    ├── gotrash.esm.js
    ├── gotrash.esm.js.map
    ├── gotrash.esm.min.js
    ├── gotrash.esm.min.js.map
    ├── gotrash.js
    ├── gotrash.js.map
    ├── gotrash.min.js
    └── gotrash.min.js.map
```

This is the most basic form of GoTrash Theme: compiled files for quick drop-in usage in nearly any web project. We provide compiled CSS and JS (`gotrash.*`), as well as compiled and minified CSS and JS (`gotrash.min.*`). [Source maps](https://web.dev/articles/source-maps) (`gotrash.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`gotrash.bundle.js` and minified `gotrash.bundle.min.js`) include [Popper](https://popper.js.org/docs/v2/).

### CSS files

GoTrash Theme includes a handful of options for including some or all of our compiled CSS.

{{< bs-table "table" >}}
| CSS files | Layout | Content | Components | Utilities |
| --- | --- | --- | --- | --- |
| `gotrash.css`<br> `gotrash.min.css`<br> `gotrash.rtl.css`<br> `gotrash.rtl.min.css` | Included | Included | Included | Included |
| `bootstrap-grid.css`<br> `bootstrap-grid.rtl.css`<br> `bootstrap-grid.min.css`<br> `bootstrap-grid.rtl.min.css` | [Only grid system]({{< docsref "/layout/grid" >}}) | — | — | [Only flex utilities]({{< docsref "/utilities/flex" >}}) |
| `bootstrap-utilities.css`<br> `bootstrap-utilities.rtl.css`<br> `bootstrap-utilities.min.css`<br> `bootstrap-utilities.rtl.min.css` | — | — | — | Included |
| `bootstrap-reboot.css`<br> `bootstrap-reboot.rtl.css`<br> `bootstrap-reboot.min.css`<br> `bootstrap-reboot.rtl.min.css` | — | [Only Reboot]({{< docsref "/content/reboot" >}}) | — | — |
{{< /bs-table >}}

### JS files

Similarly, we have options for including some or all of our compiled JavaScript.

{{< bs-table "table" >}}
| JS Files | Popper |
| --- | --- |
| `gotrash.bundle.js`<br> `gotrash.bundle.min.js`<br> | Included |
| `gotrash.js`<br> `gotrash.min.js`<br> | – |
{{< /bs-table >}}

## GoTrash Theme source code

The GoTrash Theme source code download includes the compiled CSS and JavaScript assets, along with source Sass, JavaScript, and documentation. More specifically, it includes the following and more:

```text
bootstrap/
├── dist/
│   ├── css/
│   └── js/
├── site/
│   └──content/
│      └── docs/
│          └── {{< param docs_version >}}/
│              └── examples/
├── js/
└── scss/
```

The `scss/` and `js/` are the source code for our CSS and JavaScript. The `dist/` folder includes everything listed in the compiled download section above. The `site/content/docs/` folder includes the source code for our hosted documentation, including our live examples of GoTrash Theme usage.

Beyond that, any other included file provides support for packages, license information, and development.
