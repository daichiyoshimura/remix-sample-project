import React from 'react';
import { CheckCircle } from '@mui/icons-material';
import Button from './Button';

interface SaveButtonProps {
	onClick?: () => void;
	disabled?: boolean;
}

const SaveButton: React.FC<SaveButtonProps> = ({
	onClick = () => {},
	disabled = false,
}) => {
	return (
		<Button onClick={onClick} disabled={disabled} size="icon">
			<CheckCircle />
		</Button>
	);
};

export default SaveButton;
