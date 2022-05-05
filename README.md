Working towards getting this react app loading offline in a vuplex browser. 

Below is the error I am currently getting. 

`npm run generate-c-sharp`

```Generating KeyboardUi.cs...
> unity-react@0.1.0 build
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  46.04 kB (+15 B)  build\static\js\main.7ee6b5af.js

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  serve -s build

Find out more about deployment here:

  https://cra.link/deployment


C:\Users\rober\Documents\Work\Robert\learn_react\unity-react>npm run generate-c-sharp

> unity-react@0.1.0 generate-c-sharp
> npm run build && node ./scripts/generateCSharp.js


> unity-react@0.1.0 build
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  46.04 kB  build\static\js\main.7ee6b5af.js

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  serve -s build

Find out more about deployment here:

  https://cra.link/deployment

Generating KeyboardUi.cs...
node:internal/validators:120
    throw new ERR_INVALID_ARG_TYPE(name, 'string', value);
    ^

TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received undefined
    at new NodeError (node:internal/errors:371:5)
    at validateString (node:internal/validators:120:11)
    at Object.join (node:path:429:7)
    at Object.<anonymous> (C:\Users\rober\Documents\Work\Robert\learn_react\unity-react\scripts\generateCSharp.js:12:37)
    at Module._compile (node:internal/modules/cjs/loader:1103:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47 {
  code: 'ERR_INVALID_ARG_TYPE'
}
```
