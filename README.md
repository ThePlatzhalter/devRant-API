# devRant API documentation

This aims to provide a full devRant API documentation written in the [API blueprint](https://apiblueprint.org/) format.

You can see the documentation [here](https://htmlpreview.github.io/?https://raw.githubusercontent.com/ThePlatzhalter/devRant-API/master/dist/documentation.html). Eventually, when everything is ready for production, I will set up a GitHub page for this project, but for now, it is more convenient to just use `htmlpreview.github.io`.

# Project structure

I divided the documentation into multiple files which are then concatted and rendered using gulp and aglio. This is the directory structure:

    ./dist                      # Contains rendered documentation
        |- documentation.html
    ./docs                      # Contains documentation
        |- 0-meta.apib          # Documentation meta data
        |- 1-group.apib         # API Group
        |- 2-group.apib         # API Group
    ./gulpfile.js               # Gulpfile

# Contribution

1. Clone the project:

    $ git clone https://github.com/wildcard/devRant-API

2. Change directories:

    $ cd devRant-API

3. Install development dependencies:

    $ npm install --development

4. Change some files, run `gulp` to build them and open `./dist/documentation.html` in your browser. You can also run `gulp watch` to automatically build every time you change a `.apib`-file in `./docs`.

# License
 
 I publish my work under the [CC0-1.0 license](https://creativecommons.org/publicdomain/zero/1.0/), because I believe in a free world without the need for copyrights and "intellectual private property".