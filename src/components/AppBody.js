import React from 'react';
import Nanoflux from 'nanoflux'

import ProductsContainer from './ProductsContainer';


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

				<ProductsContainer></ProductsContainer>
			</div>
		);
	}
}

AppBody.propTypes = {};

export default AppBody;