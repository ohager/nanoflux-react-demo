import ProductService from '../services/productService'
import Nanoflux from 'nanoflux';

const actionDescriptor = {
	loadProducts : function(){
		ProductService.loadProducts().then( products => {
			// You can trigger actions within actions...
			Nanoflux.getActions('appActions').pushMessage("Products loaded successfully");
			this.dispatch('updateProducts', products);
		});
	}
};

export default actionDescriptor;

