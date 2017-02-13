import './nanoflux.config' // call first to be available

import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*
Nanoflux.getDispatcher().connectTo(store);

Nanoflux.createActions('myActions', Nanoflux.getDispatcher(), {
	test : function(someState){
		this.dispatch('test', someState);
	}
});
*/
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
