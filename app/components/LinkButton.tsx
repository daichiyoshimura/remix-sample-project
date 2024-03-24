import React from 'react';
import { Link } from '@remix-run/react';

interface LinkButtonProps {
	to: string; // 遷移先のパス
	className?: string;
	children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({
	to,
	className = '',
	children,
}) => {
	return (
		<Link
			to={to}
			className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
		>
			{children}
		</Link>
	);
};

export default LinkButton;
