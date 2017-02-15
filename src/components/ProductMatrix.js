import React from 'react';
import chunk from 'lodash.chunk';

import '../css/Product.css';

const ProductShape = {
	id: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired,
	description: React.PropTypes.string.isRequired,
	price: React.PropTypes.string.isRequired
};

const Product = (props) => (
	<div className="product" onClick={props.onClick.bind(null, props.product.id)}>
		<p>{props.product.name}</p>
	</div>
);

Product.propTypes = {
	product: React.PropTypes.shape(ProductShape).isRequired,
	onClick: React.PropTypes.func.isRequired
};


const MatrixRow = (props) => {

	const columnMap = ["one column", "two columns", "three columns", "four columns", "five columns", "six columns"];
	const className = columnMap[ (12/(ProductMatrix.COLUMN_COUNT))-1];

	return (
		<div className="row">
			{props.row.map((p,i)=>(
				<div key={i} className={className}>
					<Product product={p} onClick={props.onClick.bind(p.id)}/>
				</div>
			))}
		</div>
	)
};


MatrixRow.propTypes = {
	row: React.PropTypes.arrayOf(React.PropTypes.shape(ProductShape)).isRequired,
	onClick: React.PropTypes.func.isRequired
};


class ProductMatrix extends React.Component {

	static COLUMN_COUNT = 2;

	render() {
		const rows = chunk(this.props.products, ProductMatrix.COLUMN_COUNT);

		return (<div className="container">
			{
				rows.map( (p,i) => (<MatrixRow key={i} row={p} onClick={this.props.onSelected} />) )
			}
		</div>)
	}
}

ProductMatrix.propTypes = {
	products: React.PropTypes.arrayOf(React.PropTypes.shape(ProductShape)).isRequired,
	onSelected: React.PropTypes.func.isRequired
};

export default ProductMatrix;