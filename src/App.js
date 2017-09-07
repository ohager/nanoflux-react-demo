import React from 'react';
import logo from './img/3-molecules.svg';
import './css/App.css';

import Notification from './components/Notification';
import LoadingIndicator from './components/LoadingIndicator';
import {connect, withActions} from 'nanoflux-react/lib';
import {getMessages, isLoading} from './stores/appStore';
import ProductsContainer from "./components/ProductsContainer";
import CartContainer from "./components/CartContainer";

const App = ({isLoading, messages, actions}) => (
	
	<div className="app">
		<Notification messages={messages}/>
		<LoadingIndicator isLoading={isLoading}/>
		<div className="app-header">
			<img src={logo} className="app-logo" alt="logo"/>
			<div className="row">
				<div className="six columns">
					<h2>nanoflux react demo</h2>
				</div>
				<div className="six columns">
					<input type="text" placeholder="Type text to search..."
					       onChange={e => actions.search(e.target.value)}/>
				</div>
			</div>
		</div>
		<div className="app-body">
			<div className="u-full-width">
				<div className="row">
					<div className="nine columns">
						<ProductsContainer/>
					</div>
					<div className="three columns">
						<CartContainer/>
					</div>
				</div>
			</div>
		</div>
	</div>
	
);

const mapStateToProps = {
	isLoading,
	messages: getMessages,
};

const mapActionsToProps = (actions) => ({
	search: actions.search
});

export default withActions('appActions', mapActionsToProps)(connect('appStore', mapStateToProps)(App));
