import React from 'react';
import '../css/Notification.css';

const Notification = ({messages}) => (
	
	<div className="notification-container">
		{messages.map((message, index) => {
			return (
				<div key={index} className="notification success-notification">
					<div className="notification-message">
						{message}
					</div>
					<div className="timeline"/>
				</div>)
			})
		}
	</div>
);

export default Notification;