import React from 'react';

export interface CardProps {
	children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
	return (
		<div className="flex flex-col rounded items-center bg-primary text-white p-4">
			{children}
		</div>
	);
};

export default Card;
