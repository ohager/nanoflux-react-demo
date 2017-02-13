import Nanoflux from 'nanoflux';
import AppStore from './stores/appStore';
import AppActions from './actions/appActions';

// centralized Nanoflux setup

const defaultDispatcher = Nanoflux.getDispatcher();

defaultDispatcher.connectTo([AppStore]);

// setup actions
Nanoflux.createActions('appActions', defaultDispatcher, AppActions );
