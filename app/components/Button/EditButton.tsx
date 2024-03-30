import React from 'react';
import { Edit } from '@mui/icons-material';
import Button from './Button';

export interface EditButtonProps {
	onClick?: () => void;
	disabled?: boolean;
}

const EditButton: React.FC<EditButtonProps> = ({
	onClick = () => {},
	disabled = false,
}) => {
	return (
		<Button onClick={onClick} disabled={disabled} size="icon">
			<Edit />
		</Button>
	);
};

export default EditButton;
