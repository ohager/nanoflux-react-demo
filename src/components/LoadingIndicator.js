import React from 'react';
import '../css/LoadingIndicator.css';
import loadingIcon from '../img/box.gif';
import Nanoflux from 'nanoflux';

class LoadingIndicator extends React.Component {

	constructor() {
		super();
		this.appStoreSubscription = undefined;
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

	render() {
		const className = this.state.isLoading ? "loading-indicator" : "loading-indicator hidden";
		return (
			<div className="loading-indicator-container">
				<div className={className}>
					<img src={loadingIcon} alt={this.state.isLoading ? "Loading" : ""}/>
				</div>
			</div>
		);
	}
}



export default LoadingIndicator;