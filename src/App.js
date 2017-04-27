import React, {Component} from 'react';
import logo from './img/3-molecules.svg';
import './css/App.css';
import Nanoflux from 'nanoflux';

import Notification from './components/Notification';
import LoadingIndicator from './components/LoadingIndicator';
import AppBody from './components/AppBody';

class App extends Component {

	constructor() {
		super();
		this.onSearch = this.onSearch.bind(this);

		this.state = {
			isLoading: false
		}
	}

	onStoreUpdate(state) {
		this.setState({isLoading: state.isLoading});
	}

	componentWillMount() {
		this.appStoreSubscription = Nanoflux.getStore('appStore').subscribe(this, this.onStoreUpdate);
	}

	componentWillUnmount() {
		this.appStoreSubscription.unsubscribe();
	}


	onSearch(event) {
		Nanoflux.getActions('appActions').search(event.target.value);
	}

	render() {
		return (
			<div className="app">
				<Notification />
				<LoadingIndicator isLoading={this.state.isLoading} />
				<div className="app-header">
					<img src={logo} className="app-logo" alt="logo"/>
					<div className="row">
						<div className="six columns">
							<h2>nanoflux react demo</h2>
						</div>
						<div className="six columns">
							<input type="text" placeholder="Type text to search..." onChange={this.onSearch}/>
						</div>
					</div>
				</div>
				<div className="app-body">
					<AppBody/>
				</div>
			</div>
		);
	}
}

export default App;
