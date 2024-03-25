import React from 'react';
import './TextInput.css';

export interface TextInputProps {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	className?: string;
	required?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
	value = '',
	onChange,
	placeholder = '',
	className = '',
	required = false,
}) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};

	return (
		<input
			type="text"
			className={`text-input ${className}`}
			value={value}
			onChange={handleChange}
			placeholder={placeholder}
			required={required}
		/>
	);
};

export default TextInput;
