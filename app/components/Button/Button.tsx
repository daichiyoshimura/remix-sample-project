export type ButtonProps = {
	onClick?: () => void;
	disabled?: boolean;
	color?: 'default' | 'safe' | 'caution';
	size?: 'icon' | 'text';
	children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = (
	{ onClick = () => {}, disabled = false, color = 'default', size = 'text', children },
) => {
	const [bgColor, hoverBgColor] = ((color: string, disabled: boolean): string[] => {
		if (disabled) {
			return ['bg-gray-500', 'hover:bg-gray-500'];
		}

		if (color === 'safe') {
			return ['bg-green-500', 'hover:bg-green-700'];
		}

		if (color === 'caution') {
			return ['bg-red-500', 'hover:bg-red-700'];
		}

		return ['bg-blue-500', 'hover:bg-blue-700'];
	})(color, disabled);
	const padding = size === 'text' ? 'py-2 px-6' : 'p-1';

	return (
		<button
			className={`${bgColor} ${hoverBgColor} ${padding} text-white font-bold rounded`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
