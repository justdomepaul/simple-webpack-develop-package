# Simple webpack develop package
-------------------------------

## Enviroment
- node: \^6.10.0 lts
- npm: \^3.10.6
- webpack: \^2.3.2

## Installation
eslint
```
    $ sudo npm install eslint -g
```

webpack
```
    $ sudo npm install webpack webpack-dev-server -g
```

n
```
    $ sudo npm install n -g
```

install dependency package
```
    $ sudo npm install
```

## Entry folder
```
    $ cd dist/
```
## Entry root
```
    $ cd dist/index.html
```

## Use Node Version
```
    $ sudo n lts
    $ sudo n stable
    $ sudo n
        > select version
        > enter
```

## Step
1. add your app's entry point in src/app/[app's folder]/[app's name]
2. write your component in src/component
3. open your webpack.config.js and add new entry point in entry object
4. npm run watch
5. npm run dev
6. open your browser and run this [localhost](http://localhost:8080/webpack-dev-server/index.html)


## Npm command line
webpack to watch project:
```
    $ npm run watch
```
webpack dev server to run:
```
    $ npm run dev
```

## Fix node-sass upgrade issue
When you use node version over 5 or windows 10,
you can use this way to save node-sass compile error.
```
    $ npm rebuild node-sass
```

## Fix history in npm version 3 error
If you are using npm version greater than 3.0.0 .
Note that you need to also install the history package since it is a peer dependency of React Router
and won't automatically be installed for you in npm version freater than 3.0.0.
Run npm install history and you should be good.
```
    $ npm install history
```

## Fix AirBnb eslint-plugin-jsx-a11y error
If your IDE not verify code on eslint-aribnb,
you should check eslint-plugin-jsx-a11y version,
it eslint setting only in version 2.

## Update the latest version of node_modules
```
    $ npm install -g npm-check-updates
    $ ncu --upgradeAll
    $ npm install
```
## Folder Construct
```
    |--project/
    |
    |------dist/
    |----------js/
    |----------css/
    |----------fonts/
    |
    |------src/
    |----------actions/
    |----------animates/
    |----------app/
    |----------components/
    |----------container/
    |----------css/
    |----------helper/
    |----------img/
    |----------middleware/
    |----------plugin/
    |----------reducers/
    |----------scss/
    |----------utils/
    |
    |------test/    
```