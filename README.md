# webpack and css

The webpack docu could be better so I built this small sample app.

## Features

- bundles ES2015 code and transpiles it via babel. In this example index.js requires another.js and imports it.
- bundles all your css in build/app.css. Here, index.js requires index.css which then is bundled.

## How does the CSS stuff work?

- First have a look at the JavaScript code: There we require a css file, we want to use later.
- now have a look at webpack.config.js. There is a loader which tests for css files. Every css file is processed by the ExtractTextPlugin. Within this plugin every css file is first processed by the style-loader. Afterwards the postcss-loader is applied to the styles and the css loader.
