import promisify from './promisify';
import Nanoflux from 'nanoflux';

function fetchMock(fn){
	const AppActions = Nanoflux.getActions('appActions');
	AppActions.increaseRequestCounter();
	return promisify(fn).then( data => {
		AppActions.decreaseRequestCounter();
		return data;
	})
}

export default fetchMock;
