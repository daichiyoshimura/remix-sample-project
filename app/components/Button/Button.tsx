import React from 'react';
import './Button.css';

interface ButtonProps {
	onClick: () => void;
	disabled?: boolean;
	className?: string;
	children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	onClick,
	disabled = false,
	className = '',
	children,
}) => {
	return (
		<button
			className={`button ${className}`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;
