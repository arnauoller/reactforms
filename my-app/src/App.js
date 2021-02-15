import React, { Component } from 'react'
import './App.css';
import CommitMessageTextArea from './CommitMessageTextArea';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CommitMessageTextArea/>
      </div>
    )
  }
};

export default App;
