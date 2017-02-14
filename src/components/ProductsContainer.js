import React from 'react';
import Nanoflux from 'nanoflux';

const ProductActions = Nanoflux.getActions("productActions");
const AppActions = Nanoflux.getActions("appActions");

class ProductsContainer extends React.Component {

	constructor() {
		super();
		this.state = {
			products : []
		};
	}

	onProductStoreUpdated(state){
		this.setState({products: state.products});
	};

	componentWillMount() {
		this.subscription = Nanoflux.getStore("productStore").subscribe(this, this.onProductStoreUpdated);
		ProductActions.loadProducts();
	}

	componentWillUnmount(){
		this.subscription.unsubscribe();
	}

	render() {
		return (
			<div>
				{
					this.state.products.map( (p,i) => (
						<div key={i}>
							<p>{p.name}</p>
						</div>
					))
				}
			</div>
		);
	}
}

ProductsContainer.propTypes = {};

export default ProductsContainer;