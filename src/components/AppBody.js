import React from 'react';
import Nanoflux from 'nanoflux'


class AppBody extends React.Component {

	constructor() {
		super();
		this.onClick = this.onClick.bind(this);
	}

	onClick(){
		Nanoflux.getActions('appActions').pushMessage("Clicked");
	}

	render() {
		return (
			<div>
				<p>Hey, I'm still under development</p>
				<button onClick={this.onClick}>"Click me"</button>
			</div>
		);
	}
}

AppBody.propTypes = {};

export default AppBody;