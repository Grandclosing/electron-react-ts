# A simple, easy to use boilerplate project for web-powered desktop applications. 

<img src="https://b.kisscc0.com/20180814/cew/kisscc0-electron-node-js-javascript-computer-icons-npm-electron-by-yyk-mail-ru-5b731fe571cb14.6498724715342714614661.png" alt="Electron" width="100" style="display: inline;"/>

<img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" alt="TypeScript" width="100"  style="display: inline;"/>

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt="React" width="100"  style="display: inline;"/>

<img src="https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png?t=636751984710000000" alt="Jest" width="100"  style="display: inline;"/>

<img src="https://cdn-images-1.medium.com/max/1600/1*pu9U8EYL3KGrgvapyp1pSg.png" alt="Enzyme" width="100"  style="display: inline;"/>

The poilerplate runs on [Electron](https://electronjs.org/) and enables the use of [TypeScript](https://www.typescriptlang.org/), and [React.js](https://reactjs.org/), bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Testing is done via [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/).

Electron-React-Ts uses [Foreman](https://www.npmjs.com/package/foreman), a manager for Procfile-based applications, [electron-wait-react.js](https://github.com/Grandclosing/electron-react-ts/blob/master/electron-wait-react.js), and a [.env](https://github.com/Grandclosing/electron-react-ts/blob/master/.env) file to orchestrate the dev environment so that the react application runs within the Electron sandbox by default instead of the browser. 

## MIT License

Copyright 2018 Grandclosing

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### Note: I am not by any means a Dev-Ops guru 
Look at this repo with a grain of salt. I mashed together a bunch of tutorials and boilerplates until I got something that worked for me. It might not be your ideal set up. Additionally, I left the [Create React App](https://github.com/facebookincubator/create-react-app) source files in there as-is - it's up to you to clean it up and get rid of whatever you don't want. 

With React I recommend a component-based filesystem structure. Under /src, I'd make a directory called 'components', and for each component a subdirectory. I might even split it down further and have a /src/components/stateful and /src/components/stateless, or something. I don't know - who cares, it's your project anyway. 

Further note: I have only tested this dev setup on MacOS, I cannot guarentee this will work on Windows out of the box. 

Happy hacking! 
