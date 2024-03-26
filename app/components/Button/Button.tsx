import React from 'react';

interface ButtonProps {
	onClick: () => void;
	disabled?: boolean;
	color?: 'blue' | 'red';
	className?: string;
	children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	onClick,
	disabled = false,
	color = 'blue',
	className = '',
	children,
}) => {
	// 色に応じて背景色とホバー時の背景色を決定
	const bgColor = color === 'red' ? 'bg-red-500' : 'bg-blue-500';
	const hoverBgColor =
		color === 'red' ? 'hover:bg-red-700' : 'hover:bg-blue-700';

	return (
		<button
			className={`${bgColor} ${hoverBgColor} text-white font-bold py-1 px-2 rounded ${className}`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;
