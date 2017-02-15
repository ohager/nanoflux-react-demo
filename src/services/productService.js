import fetch from '../utils/fetchMock';
import faker from 'faker';


function mockProducts(number){
	let products = [];

	for(let i = 0; i < number; ++i){
		products.push({
			id: faker.random.uuid(),
			name: faker.commerce.productName(),
			description: faker.lorem.paragraph(),
			price: faker.commerce.price()
		})
	}
	return products;
}

const service = {
	loadProducts : function() {
		return fetch( () => mockProducts(25) )
	}
};

export default service;