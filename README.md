# Simple webpack develop package
-------------------------------

## Enviroment
- node: \^6.10.0 lts
- npm: \^3.10.6
- webpack: \^2.3.2
- n: \^2.1.7
- ncu: \^2.10.5
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

npm-check-updates
```
    $ sudo npm install npm-check-updates -g
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
1. add your app's entry point in src/app/[app's folder]/[app's name].js
2. write your component in src/component
3. open your webpack.config.js and add new entry point in entry object
4. sudo npm run watch
5. sudo npm run hot
6. open your browser and run this [localhost](http://localhost:8080/webpack-dev-server/index.html)


## Npm command line
webpack to watch project:
```
    $ sudo npm run watch
```
webpack dev server to run:
```
    $ sudo npm run hot
```

## Fix node-sass upgrade issue
When you use node version over 5 or windows 10,
you can use this way to save node-sass compile error.
```
    $ sudo npm rebuild node-sass
```

## Fix history in npm version 3 error
If you are using npm version greater than 3.0.0 .
Note that you need to also install the history package since it is a peer dependency of React Router
and won't automatically be installed for you in npm version freater than 3.0.0.
Run npm install history and you should be good.
```
    $ sudo npm install history
```

## Fix AirBnb eslint-plugin-jsx-a11y error
If your IDE not verify code on eslint-aribnb,
you should check eslint-plugin-jsx-a11y version,
it eslint setting only in version 2.

## Update the latest version of node_modules
```
    $ sudo npm install -g npm-check-updates
    $ sudo ncu --upgradeAll
    $ sudo npm update
```
## Folder Construct example
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