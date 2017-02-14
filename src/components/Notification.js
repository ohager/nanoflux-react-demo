import React from 'react';
import '../css/Notification.css';
import Nanoflux from 'nanoflux';

class Notification extends React.Component {

	constructor() {
		super();
		this.appStoreSubscription = undefined;
		this.state = {
			messages: []
		}
	}

	onStoreUpdate(state) {
		this.setState({messages: state.messages});
	}

	componentWillMount() {
		this.appStoreSubscription = Nanoflux.getStore('appStore').subscribe(this, this.onStoreUpdate);
	}

	componentWillUnmount() {
		this.appStoreSubscription.unsubscribe();
	}

	render() {
		return (
			<div className="notification-container">
				{this.state.messages.map( (message, index) => {
					return (
						<div key={index} className="notification success-notification">
							<div className="notification-message">
								{message}
							</div>
							<div className="timeline" />
						</div>)
				})
				}
			</div>
		);
	}
}

export default Notification;