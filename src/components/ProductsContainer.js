import React from 'react';
import Nanoflux from 'nanoflux';
import ProductMatrix from './ProductMatrix';

const ProductActions = Nanoflux.getActions("productActions");
const AppActions = Nanoflux.getActions("appActions");


class ProductsContainer extends React.Component {

	constructor() {
		super();
		this.state = {
			products : []
		};

		this.onProductSelected = this.onProductSelected.bind(this);
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

	onProductSelected(productId){
		console.log("Selected produc", productId);
	}

	render() {
		return <ProductMatrix products={this.state.products} onSelected={this.onProductSelected} />
	}
}

ProductsContainer.propTypes = {};

export default ProductsContainer;