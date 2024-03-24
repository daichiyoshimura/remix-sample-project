import React from 'react';

export interface TextInputProps {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	className?: string;
	required?: boolean; // requiredプロパティを追加
}

const TextInput = ({
	value = '',
	onChange,
	placeholder = '',
	className = '',
	required = false,
}: TextInputProps) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};

	return (
		<input
			type="text"
			className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 ${className}`}
			value={value}
			onChange={handleChange}
			placeholder={placeholder}
			required={required}
		/>
	);
};

export default TextInput;
