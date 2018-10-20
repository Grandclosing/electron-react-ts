# A simple, easy to use boilerplate project for web-powered desktop applications. 

![Logos](logos.png)

The poilerplate runs on [Electron](https://electronjs.org/) and enables the use of [TypeScript](https://www.typescriptlang.org/), and [React.js](https://reactjs.org/), bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Testing is done via [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/).

Electron-React-Ts uses [Foreman](https://www.npmjs.com/package/foreman), a manager for Procfile-based applications, [electron-wait-react.js](https://github.com/Grandclosing/electron-react-ts/blob/master/electron-wait-react.js), and a [.env](https://github.com/Grandclosing/electron-react-ts/blob/master/.env) file to orchestrate the dev environment so that the react application runs within the Electron sandbox by default instead of the browser. 

## Getting Started

1. Create a directory for your project, somewhere you'd like to work

`> mkdir my-awesome-project`

2. cd into the project directory and clone this repo - note the '.' at the end of the clone command; this will tell Git to clone everything into the current directory, as opposed to creating a subdirectory called 'electron-react-ts'. 

`> cd my-awesome-project && git clone https://github.com/Grandclosing/electron-react-ts.git .`

3. Install all dependencies with NPM, the Node Package Manager. This might take a while as this boiler plate relies on Electron and create-react-app which are pretty hefty installs 

`> npm install`

4. Open `package.json` in the top-level directory in your favorite text editor, and edit the following fields: 

`"name"` - set this to the name of your project 
`"version"` - set this to whatever version your project is in your versioning scheme 

5. Remove the `.git` directory from the top-level directory - then create one for your own project

`> rm -rf .git && git init`

6. Run the project - this will start up a development server, display boilerplate UI in an Electron window, complete with hot-reloading for fast, on-the-fly updates as you code.

`> npm run dev`

7. When you're done developing your project, follow the instructions for [Create React App](https://github.com/facebookincubator/create-react-app) to build your project for production. 

### Note: I am not by any means a Dev-Ops guru 
Look at this repo with a grain of salt. I mashed together a bunch of tutorials and boilerplates until I got something that worked for me. It might not be your ideal set up. Additionally, I left the [Create React App](https://github.com/facebookincubator/create-react-app) source files in there, allbeit in a different structure - it's up to you to clean it up and get rid of whatever you don't want. This was motivated by the fact that I couldn't get any other Github boilerplate project running out of the box. 

I tend to organize my React projects by making a Components directory, with a separate directory for each component. In it, I keep the styles, tests, and JavaScript/TypeScript code all in one place. For additional directory structures, check out this nifty article: [Structuring React Projects](https://survivejs.com/react/advanced-techniques/structuring-react-projects/). 

__Further note:__ I have only tested this dev setup on MacOS, I cannot guarentee this will work on Windows out of the box. 

Happy hacking! 

## MIT License

Copyright 2018 Grandclosing

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


