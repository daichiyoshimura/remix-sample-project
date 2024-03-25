import React from 'react';
import { Link } from '@remix-run/react';
import './LinkButton.css';

interface LinkButtonProps {
	to: string;
	className?: string;
	children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({
	to,
	className = '',
	children,
}) => {
	return (
		<Link to={to} className={`link-button ${className}`}>
			{children}
		</Link>
	);
};

export default LinkButton;
