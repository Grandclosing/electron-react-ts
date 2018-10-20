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

5. Remove the `.git` directory from the top-level directory - then create one for your own project, and add a remote to your Github project

`> rm -rf .git && git init`

`> git remote add origin [your Github project URL here]`

You can troubleshoot/verify your remote with:

`> git remote -v`

6. Run the project - this will start up a development server, display boilerplate UI in an Electron window, complete with hot-reloading for fast, on-the-fly updates as you code.

`> npm run dev`

7. When you're done developing your project, follow the instructions for [Create React App](https://github.com/facebookincubator/create-react-app) to build your project for production. 

### Note: I am not by any means a Dev-Ops guru 
Look at this repo with a grain of salt. I mashed together a bunch of tutorials and boilerplates until I got something that worked for me. It might not be your ideal set up. Additionally, I left the [Create React App](https://github.com/facebookincubator/create-react-app) source files in there, allbeit in a different structure - it's up to you to clean it up and get rid of whatever you don't want. This was motivated by the fact that I couldn't get any other Github boilerplate project running out of the box. 

I tend to organize my React projects by making a Components directory, with a separate directory for each component. In it, I keep the styles, tests, and JavaScript/TypeScript code all in one place. For additional directory structures, check out this nifty article: [Structuring React Projects](https://survivejs.com/react/advanced-techniques/structuring-react-projects/). 

__Further note:__ I have only tested this dev setup on MacOS, I cannot guarentee this will work on Windows out of the box. They come from the packages: 

### Security Concerns

Note that NPM and Github will complain about various security concerns within the dependencies of the project. 

`hoek` - prototype pollution 
`uglify.js` - incorrect handling of non-boolian comparisons during minification; regular expression denial of service 
`foreman` - denial of service 
`cryptiles` - Insufficient Entropy 

I believe all of these exist as dev-dependencies and are of no concern. I've seen various discussions claiming Github is marking some of these despite having versions with fixes. You can run `npm audit fix` to fix some of these. Of course be sure to look into these yourself if you have project-specific conerns. 

### Suggestions for improvement? 

Feel free to make a PR to improve this boilerplate. Remember to keep with the 'spirit' of the project by keeping it simple to use out-of-the-box. 

Happy hacking! 

## DON'T BE A DICK PUBLIC LICENSE - [DBAD](https://dbad-license.org/)

> Version 1.1, December 2016

> Copyright (C) 2018 Grandclosing

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document.

> DON'T BE A DICK PUBLIC LICENSE
> TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

1. Do whatever you like with the original work, just don't be a dick.

   Being a dick includes - but is not limited to - the following instances:
    
    a. Outright copyright infringement - Don't just copy this and change the name.
    
    b. Selling the unmodified original with no work done what-so-ever, that's REALLY being a dick.
 
    c. Modifying the original work to contain hidden harmful content. That would make you a PROPER dick.

2. If you become rich through modifications, related works/services, or supporting the original work,
share the love. Only a dick would make loads off this work and not buy the original work's
creator(s) a pint.

3. Code is provided with no warranty. Using somebody else's code and bitching when it goes wrong makes
you a DONKEY dick. Fix the problem yourself. A non-dick would submit the fix back with a pull request.


