import Immutable from 'seamless-immutable';
import Nanoflux from 'nanoflux';

// Best practice: Immutable state guarantees that really no one outside the store can change this state
let state = Immutable({
	searchTerm : "",
	filteredProducts : [],
	products: [],
	cart: []
});


function filterProducts(products,searchTerm){
	if(searchTerm === ""){
		return products;
	}

	const regex = new RegExp(searchTerm, "i");
	return products.filter( p => regex.test(p.name));
}

// HINT: you cannot use arrow functions here, as the call context from Nanoflux needs to be bound
export default {

	onAppStoreUpdate : function(appState){
		if(appState.searchTerm !== state.searchTerm){
			state = state.set("searchTerm", appState.searchTerm);
			state = state.set("filteredProducts", filterProducts(state.products, state.searchTerm));
			this.notify(state);
		}
	},

	onInitialize : function(){
		// Chaining stores...we could do the filtering also inside the ProductContainer.
		const appstore = Nanoflux.getStore("appStore");
		appstore.subscribe(this, this.onAppStoreUpdate);
	},

	getState : function() {
		return state;
	},

	onAddProductToCart : function(product){
		const cart = state.cart.asMutable();
		cart.push(product);

		state = state.set("cart", cart);
		this.notify(state);
	},

	onUpdateProducts : function(products){
		state = state.set("products", products);
		state = state.set("filteredProducts", filterProducts(state.products, state.searchTerm));
		this.notify(state);
	}
};


