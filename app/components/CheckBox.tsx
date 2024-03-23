import React from 'react';

interface CheckboxProps {
	checked: boolean;
	onChange: (checked: boolean) => void;
	label?: string;
	className?: string;
}

const Checkbox = ({
	checked,
	onChange,
	label = '',
	className = '',
}: CheckboxProps) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.checked);
	};

	return (
		<label className={`flex items-center ${className}`}>
			<input
				type="checkbox"
				className="form-checkbox text-blue-500 h-5 w-5 mr-2"
				checked={checked}
				onChange={handleChange}
			/>
			{label}
		</label>
	);
};

export default Checkbox;
