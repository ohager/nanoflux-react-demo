import React from 'react';
import ProductMatrix from './ProductMatrix';
import {connect, withActions} from "nanoflux-react";
import {getFilteredProducts} from "../stores/productStore";

class ProductsContainer extends React.Component {
	
	componentWillMount(){
		this.props.actions.loadProducts();
	}
	
	onProductSelected(productId) {
		const product = this.props.filteredProducts.find(p => p.id === productId);
		this.props.actions.addProductToCart(product);
		this.props.actions.pushMessage(`${product.name} added to Cart`);
	}
	
	render() {
		return <ProductMatrix products={this.props.filteredProducts} onSelected={this.onProductSelected}/>
	}
}

const mapStateToProps = {
	filteredProducts: getFilteredProducts,
};

const mapProductActionsToProps = (actions) => ({
	loadProducts: actions.loadProducts,
	addProductToCart: actions.addProductToCart,
});

const mapAppActionsToProps = (actions) => ({
	pushMessage: actions.pushMessage
});


export default
// it's better to map Actions first, as this reduces re-rendering further HOCs
withActions('appActions', mapAppActionsToProps)(
	withActions('productActions', mapProductActionsToProps)(
		connect('productStore', mapStateToProps)(ProductsContainer))
);