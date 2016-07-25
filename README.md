# Simple-webpack-develop-config
-------------------------------

## Enviroment
- node: ^4.4.7
- npm: ^3.10.6
- webpack: ^1.13.1

## Installation
eslint
```
    $ npm install eslint -g
```

webpack
```
    $ npm install webpack webpack-dev-server -g
```

install dependency package
```
    $ npm install
```

## Entry folder
```    
    $ cd dist/
```
## Entry root
```
    $ cd dist/index.html
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
