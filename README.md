# Vue Lab

Starter kit using VueJS to create site UX design prototypes.


## Create a new site

* `npm install -g gnat`
* `gnat clone https://github.com/reykjavikingur/vue-lab.git YOUR_SITE`
* `cd YOUR_SITE`
* `npm install`


## Run the local web server

* `npm start`

This will start a web server on `localhost:3000` (or some other available port).

It will also watch `src` files for changes and live-reload whenever necessary.


## Routes

The files in `src/assets/scripts/routes` correspond to the URL's of the web server. For example:

* The URL `/` comes from `src/assets/scripts/routes/index.js`
* The URL `/about` comes from `src/assets/scripts/routes/about.js`
* etc.


## Components

The files in `src/assets/scripts/components` are the Vue components that you can use in any other component's template. For example:

* The file `src/assets/scripts/components/menu.js` defines a Vue component with the name `ix-menu`. Use it in another template as `<is-menu/>`.


## Styles

The SASS files are in `src/assets/styles`.




## TODO

* Incorporate https://vuetifyjs.com/
