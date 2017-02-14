import fetch from '../utils/fetchMock';

const mockedProducts = [
	{
		id: 1,
		name : "Product 1",
		description : "Awesome product you need to acquire!",
		price : 2.5
	}
];

const service = {
	loadProducts : function() {
		return fetch( () => mockedProducts )
	}
};

export default service;