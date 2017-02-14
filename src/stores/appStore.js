import Nanoflux from 'nanoflux';
import Immutable from 'seamless-immutable';


// Best practice: Immutable state guarantees that really no one outside the store can change this state
let appState = Immutable({
	searchTerm : "",
	messages : []
});


// HINT: you cannot use arrow functions here, as the call context from Nanoflux needs to be bound
const descriptor = {
	getState : function() {
		return appState;
	},
	onPushMessage : function(message){
		// although, this is tedious, it protects you from undesired side-effects
		let mutableMessages = appState.messages.asMutable();
		mutableMessages.unshift(message);
		appState = Immutable.set(appState,"messages", mutableMessages);
		this.notify(appState);
	},
	onPopMessage : function(){
		let mutableMessages = appState.messages.asMutable();
		mutableMessages.shift();
		appState = appState.set("messages", mutableMessages);
		this.notify(appState);
	},
	onSearch: function(searchTerm) {
		appState = appState.set("searchTerm", searchTerm);
		this.notify(appState);
	}
};

export default Nanoflux.createStore('appStore', descriptor);

