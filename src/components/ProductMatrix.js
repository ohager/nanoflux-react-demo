import React from 'react';
import {Product, ProductShape} from './Product';
import chunk from 'lodash.chunk';

import '../css/Product.css';

const PRODUCTS_COLUMN_COUNT = 3;

const MatrixRow = (props) => {

	const columnMap = ["one column", "two columns", "three columns", "four columns", "five columns", "six columns"];
	const className = columnMap[ (12/(PRODUCTS_COLUMN_COUNT))-1]  || columnMap[2];

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

	render() {
		const rows = chunk(this.props.products, PRODUCTS_COLUMN_COUNT );

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