import Nanoflux from 'nanoflux';

let appState = {
	searchTerm : ""
};

const descriptor = {
	getState : function() {
		return appState;
	},
	onSearch: function(searchTerm) {
		appState = Object.assign(appState, {searchTerm: searchTerm});

		console.log("search for:", appState.searchTerm);

		this.notify(appState);
	}
};

export default Nanoflux.createStore('appStore', descriptor);

