const actionDescriptor = {
	search : function(searchTerm){
		this.dispatch('search', searchTerm);
	},
	pushMessage : function(message){
		this.dispatch('pushMessage', message);
		setTimeout( () => { this.dispatch('popMessage') }, 3*1000);
	}
};

export default actionDescriptor;

