import React from 'react';

interface ButtonProps {
	onClick?: () => void;
	disabled?: boolean;
	warning?: boolean;
	size?: 'tiny' | 'middle';
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	onClick = () => {},
	disabled = false,
	warning = false,
	size = 'middle',
	children,
}) => {
	const bgColor = warning ? 'bg-red-500' : 'bg-blue-500';
	const hoverBgColor = warning ? 'hover:bg-red-700' : 'hover:bg-blue-700';
	const shape = size === 'middle' ? 'py-1 px-2' : 'p-0';

	return (
		<button
			className={`${bgColor} ${hoverBgColor} ${shape} text-white font-bold rounded`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;
