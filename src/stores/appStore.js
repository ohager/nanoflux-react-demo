import Immutable from 'seamless-immutable';

// Best practice: Immutable state guarantees that really no one outside the store can change this state
let appState = Immutable({
	searchTerm : "",
	messages : [],
	isLoading : false
});

let requestCounter =  0;

// HINT: you cannot use arrow functions here, as the call context from Nanoflux needs to be bound
export default {
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
	},
	onIncreaseRequestCount : function(){
		appState = appState.set("isLoading", ++requestCounter > 0);
		this.notify(appState);
	},
	onDecreaseRequestCount : function(){
		--requestCounter;
		if(requestCounter<0) requestCounter = 0;
		appState = appState.set("isLoading", requestCounter > 0);
		this.notify(appState);
	}
};


