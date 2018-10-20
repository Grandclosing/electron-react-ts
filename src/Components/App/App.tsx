import * as React from 'react';
import './App.css';

import logo from '../../Assets/logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        { /* The path to App.tsx is a little convoluted, but used to demonstrate the use of React.js, 
             es6 template strings, and the use of the Node.js __dirname variable from the Electron renderer process. */ }        
        <p className="App-intro">
          To get started, edit <code>{`${__dirname}src/Components/App/App.tsx`}</code> and save to reload!
        </p>
      </div>
    );
  }
}

export default App;
