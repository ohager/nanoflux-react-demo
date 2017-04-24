import React from 'react';
import Nanoflux from 'nanoflux';
import '../css/Cart.css';
import cart from '../img/cart.png';

const localeNumberFormatter = new Intl.NumberFormat();

const CartItem = ({name, price}) => (

	<div className="row item">
		<div className="six columns" >
			{name}
		</div>

		<div className="six columns" >
			{"$ " + localeNumberFormatter.format(price)}
		</div>
	</div>
	);

class Cart extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items: []
		}
	}

	onProductStoreUpdated(state){
		this.setState({items:state.cart});
	};

	componentWillMount(){
		this.subscription = Nanoflux.getStore('productStore').subscribe(this, this.onProductStoreUpdated);
	}

	componentWillUnmount(){
		this.subscription.unsubscribe();
	}

	calcTotal(){
		const total = this.state.items.reduce( (price, item) => price +item.price, 0);
		return "$ " + localeNumberFormatter.format(total);
	}

	render() {
		return (
			<div className="cart">
				<div className="row header">
					<div className="twelve columns">
						<div className="row">
							<div className="six columns">
								<img src={cart} alt="Shopping Cart" />
							</div>
							<div className="six columns">
								<h4>{this.calcTotal()}</h4>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						{
							this.state.items.length > 0 ?
							this.state.items.map( (i,k) => <CartItem key={k} {...i}/> ) :
								<h4>Nothing here yet</h4>
						}
					</div>
				</div>
			</div>
		);
	}
}

Cart.propTypes = {};

export default Cart;