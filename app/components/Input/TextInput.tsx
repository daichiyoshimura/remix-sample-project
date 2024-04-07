export type TextInputProps = {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	required?: boolean;
};

export const TextInput: React.FC<TextInputProps> = (
	{ value = '', onChange, placeholder = '', required = false },
) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};

	return (
		<input
			type="text"
			className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500"
			value={value}
			onChange={handleChange}
			placeholder={placeholder}
			required={required}
		/>
	);
};