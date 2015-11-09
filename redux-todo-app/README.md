Redux Todo Example
=====================

* hot reloading React components
* error handling inside component `render()` function
* babel-plugin-react-transform
* webpack

This example is based on the official redux [todo example](http://rackt.org/redux/docs/basics/ExampleTodoList.html) in the docs.

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