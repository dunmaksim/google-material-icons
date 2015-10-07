# google-material-icons

Repository with Google Material Icon Font

## Install

The recommended way to use the Material Icons font is hosted by Google Fonts, available here:

```
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

Read more in our full usage guide:
http://google.github.io/material-design-icons/#icon-font-for-the-web

This repository created for users, where will use Google Material Icon Font without CDN. You must two simple steps do:

* install package with Bower

    ```
    bower install google-material-icons --save
    ```

* Include css-file from dist-folder in your project:

    ```
    <link rel="stylesheet" href="/node_modules/google-material-icons/dist/material-icons-font.css">
    ```

    or for production minifyed version:

    ```
    <link rel="stylesheet" href="/node_modules/google-material-icons/dist/material-icons-font.min.css">
    ```

## Build your own CSS

For creation custom build of CSS, you can use Gulp manager. Project contain SASS-file, but not support tasks for building CSS with him.
