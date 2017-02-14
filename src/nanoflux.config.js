import Nanoflux from 'nanoflux';
import AppStore from './stores/appStore';
import ProductStore from './stores/productStore';
import AppActions from './actions/appActions';
import ProductActions from './actions/productActions';

// centralized Nanoflux setup

const defaultDispatcher = Nanoflux.getDispatcher();

defaultDispatcher.connectTo([
	Nanoflux.createStore('appStore', AppStore),
	Nanoflux.createStore('productStore', ProductStore),
]);

// setup actions
Nanoflux.createActions('appActions', defaultDispatcher, AppActions );
Nanoflux.createActions('productActions', defaultDispatcher, ProductActions);
