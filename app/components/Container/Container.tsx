import React from 'react';

interface ButtonContainerProps {
	children?: React.ReactNode;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({ children }) => {
	return <div className="flex justify-center mt-4 gap-4">{children}</div>;
};

export default ButtonContainer;
