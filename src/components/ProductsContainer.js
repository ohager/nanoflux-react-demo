import React from 'react';
import Products from './Products';
import {connect, withActions} from "nanoflux-react";
import {getFilteredProducts} from "../stores/productStore";

// Best practice: A typical lean container that just 'enhances' your targeted component
const mapStateToProps = {
	filteredProducts: getFilteredProducts,
};

const mapProductActionsToProps = (actions) => ({
	loadProducts: actions.loadProducts,
	addProductToCart: actions.addProductToCart,
});

const mapAppActionsToProps = (actions) => ({
	pushMessage: actions.pushMessage
});

// ---------- Functional Programming is fun! -----------
// This is how you can connect multiple ActionCreators and Stores...just compose them
// it's better to map Actions first, as this reduces re-rendering further HOCs
export default
withActions('appActions', mapAppActionsToProps)(
	withActions('productActions', mapProductActionsToProps)(
		connect('productStore', mapStateToProps)(Products))
);