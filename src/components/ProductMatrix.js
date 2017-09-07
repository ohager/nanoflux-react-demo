import React from 'react';
import PropTypes from 'prop-types';
import {Product, ProductShape} from './Product';
import chunk from 'lodash.chunk';

import '../css/Product.css';

const PRODUCTS_COLUMN_COUNT = 3;

const MatrixRow = (props) => {
	
	const columnMap = ["one column", "two columns", "three columns", "four columns", "five columns", "six columns"];
	const className = columnMap[(12 / (PRODUCTS_COLUMN_COUNT)) - 1] || columnMap[2];
	
	return (
		<div className="row">
			{props.row.map((p, i) => (
				<div key={i} className={className}>
					<Product product={p} onClick={props.onClick.bind(p.id)}/>
				</div>
			))}
		</div>
	)
};

MatrixRow.propTypes = {
	row: PropTypes.arrayOf(PropTypes.shape(ProductShape)).isRequired,
	onClick: PropTypes.func.isRequired
};

const ProductMatrix = ({products, onSelected}) => {
	
	const rows = chunk(products, PRODUCTS_COLUMN_COUNT);
	
	return (<div className="container">
		{
			rows.map((p, i) => (<MatrixRow key={i} row={p} onClick={onSelected}/>))
		}
	</div>)
};

ProductMatrix.propTypes = {
	products: PropTypes.arrayOf(PropTypes.shape(ProductShape)).isRequired,
	onSelected: PropTypes.func.isRequired
};

export default ProductMatrix;