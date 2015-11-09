React Transform Example
=====================

* hot reloading React components
* error handling inside component `render()` function
* babel-plugin-react-transform
* webpack

This example is based on gaeron's [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate)

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