import React, { Component } from 'react';
import logo from './img/3-molecules.svg';
import './css/App.css';
import Nanoflux from 'nanoflux';

import AppBody from './AppBody';

class App extends Component {

  constructor(){
    super();
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(event){
    Nanoflux.getActions('appActions').search({searchTerm: event.target.value});
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo"/>
          <div className="row">
            <div className="six columns">
              <h2>nanoflux react demo</h2>
            </div>
            <div className="six columns">
              <input type="text" placeholder="Type text to search..." onChange={this.onSearch} />
            </div>
          </div>
        </div>
        <p className="app-body">
          <AppBody/>
        </p>
      </div>
    );
  }
}

export default App;
