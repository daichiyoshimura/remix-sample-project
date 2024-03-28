import React from 'react';

interface BoxProps {
	children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => {
	return (
		<div
			className={`bg-lightgray p-4 m-4 rounded-lg shadow-md flex justify-center items-center`}
		>
			{children}
		</div>
	);
};

export default Box;
