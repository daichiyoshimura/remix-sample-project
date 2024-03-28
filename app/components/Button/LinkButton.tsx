import React from 'react';
import { Link } from '@remix-run/react';
import Button from './Button';

interface LinkButtonProps {
	to: string;
	children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ to, children }) => {
	return (
		<Link to={to}>
			<Button>{children}</Button>
		</Link>
	);
};

export default LinkButton;
