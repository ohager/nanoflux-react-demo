import React from 'react';
import ProductMatrix from './ProductMatrix';

class Products extends React.Component {
	
	componentWillMount() {
		this.props.actions.loadProducts();
	}
	
	// must be arrow function to access 'this', or needs bind(this)
	// see also: https://medium.com/@rjun07a/binding-callbacks-in-react-components-9133c0b396c6
	onProductSelected = (productId) => {
		const product = this.props.filteredProducts.find(p => p.id === productId);
		this.props.actions.addProductToCart(product);
		this.props.actions.pushMessage(`${product.name} added to Cart`);
	};
	
	componentWillReceiveProps(nextProps){
		if(this.props.searchTerm !== nextProps.searchTerm){
			this.props.actions.filterProducts(nextProps.searchTerm);
		}
		this.props = nextProps;
	}
	
	render() {
		return <ProductMatrix products={this.props.filteredProducts} onSelected={this.onProductSelected}/>
	}
}

export default Products;