import Immutable from 'seamless-immutable';

// Best practice: Immutable state guarantees that really no one outside the store can change this state
let state = Immutable({
	filteredProducts: [],
	products: [],
	cart: []
});

export const getFilteredProducts = () => state.filteredProducts;
export const getCartItems = () => state.cart;

function filterProducts(products, searchTerm) {
	if (searchTerm === "") {
		return products;
	}
	
	const regex = new RegExp(searchTerm, "i");
	return products.filter(p => regex.test(p.name));
}

// HINT: you cannot use arrow functions here, as the call context from Nanoflux needs to be bound
export default {
	
	onFilterProducts: function (searchTerm) {
		state = state.set("filteredProducts", filterProducts(state.products, searchTerm));
		this.notify();
	},
	
	onAddProductToCart: function (product) {
		const cart = state.cart.asMutable();
		const productIndex = cart.findIndex(p => p.product.id === product.id);
		
		if (productIndex >= 0) {
			const foundProduct = cart[productIndex];
			cart[productIndex] = foundProduct.set('quantity', foundProduct.quantity + 1);
		}
		else {
			cart.push({
				quantity: 1,
				product: product
			});
		}
		
		state = state.set("cart", cart);
		this.notify();
	},
	
	onUpdateProducts: function (products) {
		state = state.set("products", products);
		state = state.set("filteredProducts", filterProducts(state.products, state.searchTerm));
		this.notify();
	}
};


