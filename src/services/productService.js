import fetch from '../utils/fetchMock';
import faker from 'faker';

function mockProducts(number){

	const imageCategories = ["abstract", "animals", "business", "cats", "city", "food", "nightlife", "fashion", "people", "nature", "sports", "technics", "transport"];

	let products = [];

	for(let i = 0; i < number; ++i){

		const category = imageCategories[Math.ceil(Math.random() * imageCategories.length)];

		products.push({
			id: faker.random.uuid(),
			name: faker.commerce.productName(),
			description: faker.lorem.paragraph(),
			price: +faker.commerce.price(),
			image: faker.image.imageUrl(200,200, category)
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