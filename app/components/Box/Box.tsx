import React, { ReactNode } from 'react';

export interface BoxProps {
	children: ReactNode;
	className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
	return (
		<div
			className={`bg-lightgray p-4 mb-4 rounded-lg shadow-md flex justify-center items-center ${className}`}
		>
			{children}
		</div>
	);
};

export default Box;
