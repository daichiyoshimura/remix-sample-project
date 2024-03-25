import React from 'react';
import './ContentArea.css';

interface ContentAreaProps {
	children?: React.ReactNode;
}

const ContentArea: React.FC<ContentAreaProps> = ({ children }) => {
	return <div className="content-area">{children}</div>;
};

export default ContentArea;
