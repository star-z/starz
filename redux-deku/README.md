Redux Deku Example
=====================

* routing with router5;
* redux dev tools
* webpack

extended from thomas roch's awesome [router5 examples](https://github.com/router5/examples)

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