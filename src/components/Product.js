import React, {Component} from 'react';
import PropTypes from 'prop-types';
import loadingIcon from "../img/box.gif";
import randomColor from 'randomcolor';

const localeNumberFormatter = new Intl.NumberFormat();

const priceStyle = {
	borderTop: "1px solid #eee",
	borderBottom: "1px solid #eee",
	padding: "0.5rem"
};

export const ProductShape = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired
};

export class Product extends Component {
	constructor(props) {
		super(props);
		this.onLoadImage = this.onLoadImage.bind(this);
		this.state = {
			showLoadingIcon: true,
			loadingColor: randomColor({hue: 'blue'})
		}
	}
	
	onLoadImage() {
		this.setState({showLoadingIcon: false})
	}
	
	render() {
		const imgStyle = {
			display: this.state.showLoadingIcon ? "none" : "inherit"
		};
		const loadingIconStyle = {
			display: !this.state.showLoadingIcon ? "none" : "inherit",
			backgroundColor: this.state.loadingColor
		};
		const props = this.props;
		
		return (
			<div className="product" onClick={props.onClick.bind(null, props.product.id)}>
				<div className="row">
					<div className="twelve columns">
						<div className="loading-indicator" style={loadingIconStyle}>
							<img className="loading-icon" src={loadingIcon} alt="Loading..."/>
						</div>
						<img className="product-image" style={imgStyle} onLoad={this.onLoadImage}
						     src={props.product.image} alt={props.product.name}/>
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<h5>{props.product.name}</h5>
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<h5 style={priceStyle}>{"$" + localeNumberFormatter.format(props.product.price)}</h5>
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<p>{props.product.description}</p>
					</div>
				</div>
			</div>)
	}
}

Product.propTypes = {
	product: PropTypes.shape(ProductShape).isRequired,
	onClick: PropTypes.func.isRequired
};


