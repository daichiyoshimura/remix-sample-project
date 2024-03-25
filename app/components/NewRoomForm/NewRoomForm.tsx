import React, { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import './NewRoomForm.css';

export interface FormData {
	name: string;
	imageUrl?: string;
	createdAt: string;
	createdBy: string;
}

interface NewRoomFormProps {
	onSubmit: (data: FormData) => void;
}

const NewRoomForm: React.FC<NewRoomFormProps> = ({ onSubmit }) => {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		imageUrl: '',
		createdAt: '',
		createdBy: '',
	});

	const handleChange = (name: string, value: string) => {
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files && e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				if (reader.readyState === 2) {
					setFormData((prevData) => ({
						...prevData,
						imageUrl: reader.result as string,
					}));
				}
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit(formData);
	};

	return (
		<form onSubmit={handleSubmit} className="new-room-form">
			<div className="form-group">
				<label htmlFor="name">Room Name:</label>
				<TextInput
					value={formData.name}
					onChange={(value) => handleChange('name', value)}
					required
				/>
			</div>
			<div className="form-group">
				<label htmlFor="image">Image:</label>
				<input
					type="file"
					id="image"
					accept="image/*"
					onChange={handleImageChange}
				/>
			</div>
		</form>
	);
};

export default NewRoomForm;
