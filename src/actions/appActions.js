const actionDescriptor = {
	search : function(searchTerm){
		this.dispatch('search', searchTerm);
	},
	pushMessage : function(message){
		this.dispatch('pushMessage', message);
		setTimeout( () => { this.dispatch('popMessage') }, 3*1000);
	},
	increaseRequestCounter : function(){
		this.dispatch('increaseRequestCount');
	},
	decreaseRequestCounter : function(){
		this.dispatch('decreaseRequestCount');
	}
};

export default actionDescriptor;

