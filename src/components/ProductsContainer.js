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
		this.setState({products: state.filteredProducts});
	};

	componentWillMount() {
		this.productStoreSubscription = Nanoflux.getStore("productStore").subscribe(this, this.onProductStoreUpdated);
		ProductActions.loadProducts();
	}

	componentWillUnmount(){
		this.productStoreSubscription.unsubscribe();
	}

	onProductSelected(productId){
		const product = this.state.products.find( p => p.id === productId );
		AppActions.pushMessage(`Clicked ${product.name}`);
	}

	render() {
		return <ProductMatrix products={this.state.products} onSelected={this.onProductSelected} />
	}
}

ProductsContainer.propTypes = {};

export default ProductsContainer;