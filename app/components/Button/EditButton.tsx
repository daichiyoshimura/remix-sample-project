import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import Button from './Button';

interface EditButtonProps {
	onClick?: () => void;
	disabled?: boolean;
}

const EditButton: React.FC<EditButtonProps> = ({
	onClick = () => {},
	disabled = false,
}) => {
	return (
		<Button onClick={onClick} disabled={disabled} size="tiny">
			<EditIcon />
		</Button>
	);
};

export default EditButton;
