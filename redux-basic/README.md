Redux Basic Example
=====================

* hot reloading React components
* error handling inside component `render()` function
* redux dev tools
* babel-plugin-react-transform
* webpack

This example is based on hedgerh's [redux-shopping-cart-example](https://github.com/rackt/redux/tree/master/examples/shopping-cart)

## Run Dev

```
npm install
npm start
open http://localhost:3000
```

## Run Prod

```
npm install
npm run build
npm start:prod
open http://localhost:3000
```

* note: have had to modify the .babelrc to remove the hot loader for production. as follows

```
{
  "stage": 0,
  "env": {
    "production": {
    }
  }
}
```

## License

[MIT](http://isekivacenz.mit-license.org/)