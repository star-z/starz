Redux Pets App Example
=====================

* hot reloading React components;
* routing with redux-router and react-router;
* redux dev tools
* babel-plugin-react-transform
* webpack

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
open http://localhost:5000
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