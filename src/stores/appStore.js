import Immutable from 'seamless-immutable';

// Best practice: Immutable state guarantees that really no one outside the store can change this state
let appState = Immutable({
	searchTerm : "",
	messages : [],
	requestCounter : 0,
});

// Best practice: Use so called selectors to provide access to your state
export const getSearchTerm = () => appState.searchTerm;
export const getMessages = () => appState.messages;
export const isLoading = () => appState.requestCounter > 0;

// HINT: you cannot use arrow functions here, as the call context from Nanoflux needs to be bound
export default {
	onPushMessage : function(message){
		// although, this is a bit more verbose, it protects you from undesired side-effects
		let mutableMessages = appState.messages.asMutable();
		mutableMessages.push(message);
		appState = Immutable.set(appState,"messages", mutableMessages);
		this.notify();
	},
	onPopMessage : function(){
		let mutableMessages = appState.messages.asMutable();
		mutableMessages.shift();
		appState = appState.set("messages", mutableMessages);
		this.notify();
	},
	onSearch: function(searchTerm) {
		appState = appState.set("searchTerm", searchTerm);
		this.notify();
	},
	onIncreaseRequestCount : function(){
		appState = appState.set("requestCounter", appState.requestCounter + 1);
		this.notify();
	},
	onDecreaseRequestCount : function(){
		let requestCounter = appState.requestCounter;
		if(--requestCounter<0) requestCounter = 0;
		appState = appState.set("requestCounter", requestCounter);
		this.notify();
	}
};


