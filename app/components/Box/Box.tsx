import React from 'react';

export interface BoxProps {
	children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => {
	return (
		<div
			className={`bg-background p-4 mrl-4 rounded-lg shadow-md flex justify-center items-center`}
		>
			{children}
		</div>
	);
};

export default Box;
