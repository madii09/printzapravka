// import React, { useState } from 'react';
import { Button } from '../Button/Button';
import './Modal.css';

export const Modal = ({ content, onClose }) => {
	return (
		<div className='modal-overlay'>
			<div className='modal'>
				{/* Close button */}
				<button className='close-modal' onClick={onClose}>
					Close
				</button>

				{/* Display dynamic content */}
				<div className='modal-content'>{content}</div>
			</div>
		</div>
	);
};
