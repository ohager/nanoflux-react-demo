import React from "react";
import "../css/LoadingIndicator.css";
import loadingIcon from "../img/box.gif";


const LoadingIndicator = ({isLoading}) => (
	<div className="loading-indicator-container">
		<div className={isLoading ? "loading-indicator" : "loading-indicator hidden"}>
			<img src={loadingIcon} alt={isLoading ? "Loading" : ""}/>
		</div>
	</div>
);


export default LoadingIndicator;