export default function (fn){
	return new Promise( (resolve, reject) => {
		setTimeout( () => {resolve(fn())}, 1500 );
	});
}
