import React, { Component } from 'react';
import Header from './components/Header/topbar';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default App;
