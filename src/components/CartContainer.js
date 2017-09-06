import Cart from "./Cart";
import {getCartItems} from "../stores/productStore";
import {connect} from "nanoflux-react";

// Best practice: A typical lean container that just 'enhances' your targeted component
const mapStateToProps = {
	items: getCartItems,
};

export default connect('productStore', mapStateToProps)(Cart);