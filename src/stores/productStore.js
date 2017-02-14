import Immutable from 'seamless-immutable';


// Best practice: Immutable state guarantees that really no one outside the store can change this state
let state = Immutable({
	products: []
});

// HINT: you cannot use arrow functions here, as the call context from Nanoflux needs to be bound
export default {
	getState : function() {
		return state;
	},
	onUpdateProducts : function(products){
		state = state.set("products", products);
		this.notify(state);
	}
};

