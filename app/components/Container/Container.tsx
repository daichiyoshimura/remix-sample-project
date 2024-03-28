import React from 'react';

interface ContainerProps {
	children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	return <div className="flex justify-center mt-4 gap-4">{children}</div>;
};

export default Container;
