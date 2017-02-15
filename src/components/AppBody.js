import React from 'react';
import Nanoflux from 'nanoflux'

import ProductsContainer from './ProductsContainer';


class AppBody extends React.Component {

	constructor() {
		super();
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		Nanoflux.getActions('appActions').pushMessage("Clicked");
	}

	render() {
		return (
			<div className="u-full-width">
				<h2>Hey, I'm still under development</h2>
				<div className="row">
					<div className="nine columns">
						<ProductsContainer/>
					</div>
					<div className="three columns">
						<button onClick={this.onClick}>"Click me"</button>
					</div>
				</div>
			</div>
		);
	}
}

AppBody.propTypes = {};

export default AppBody;