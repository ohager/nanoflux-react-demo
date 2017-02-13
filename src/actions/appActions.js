const actionDescriptor = {
	search : function(searchTerm){
		this.dispatch('search', searchTerm);
	}
};

export default actionDescriptor;

