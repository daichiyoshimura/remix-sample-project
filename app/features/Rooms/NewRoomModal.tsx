import React, { useState } from 'react';
import TextInput from '../../components/TextInput/TextInput';

export interface FormData {
	name: string;
	imageUrl?: string;
	createdAt: string;
	createdBy: string;
}

interface NewRoomModalProps {
	onSubmit: (data: FormData) => void;
}

const NewRoomModal: React.FC<NewRoomModalProps> = ({ onSubmit }) => {
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
		<form onSubmit={handleSubmit} className="flex flex-col gap-4">
			<div className="flex flex-col">
				<label htmlFor="name" className="mb-1">
					Room Name:
				</label>
				<TextInput
					value={formData.name}
					onChange={(value) => handleChange('name', value)}
					required
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="image" className="mb-1">
					Image:
				</label>
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

export default NewRoomModal;
