import React from 'react';
import Nanoflux from 'nanoflux'

import ProductsContainer from './ProductsContainer';
import Cart from "./Cart";


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
				<div className="row">
					<div className="nine columns">
						<ProductsContainer/>
					</div>
					<div className="three columns">
						<Cart/>
					</div>
				</div>
			</div>
		);
	}
}

AppBody.propTypes = {};

export default AppBody;