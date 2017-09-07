import React from 'react';
import '../css/Cart.css';
import cart from '../img/cart.png';

const localeNumberFormatter = new Intl.NumberFormat();

const CartItem = ({quantity, product}) => (
	
	<div className="row item">
		<div className="six columns" style={{textAlign: "left"}}>
			{product.name}
		</div>
		<div className="three columns" style={{textAlign: "left"}}>
			{"$ " + localeNumberFormatter.format(product.price)}
		</div>
		<div className="three columns">
			{quantity + "x"}
		</div>
	</div>
);

const calcTotal = (items) => {
	const total = items.reduce((price, {quantity, product}) => price + (quantity * product.price), 0);
	return "$ " + localeNumberFormatter.format(total);
};

const Cart = ({items}) => (
	
	<div className="cart">
		<div className="row header">
			<div className="twelve columns">
				<div className="row">
					<div className="six columns">
						<img src={cart} alt="Shopping Cart"/>
					</div>
					<div className="six columns">
						<h4>{calcTotal(items)}</h4>
					</div>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="twelve columns">
				{
					items.length > 0 ?
						items.map((i, k) => <CartItem key={k} {...i}/>) :
						<h4>Nothing here yet</h4>
				}
			</div>
		</div>
	</div>
	
);

export default Cart;