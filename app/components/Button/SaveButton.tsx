import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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
		<Button onClick={onClick} disabled={disabled} size="tiny">
			<CheckCircleIcon />
		</Button>
	);
};

export default SaveButton;
