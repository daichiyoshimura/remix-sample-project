import { Edit } from '@mui/icons-material';
import { Button } from '@components';

export type EditButtonProps = {
	onClick?: () => void;
	disabled?: boolean;
};

export const EditButton: React.FC<EditButtonProps> = ({ onClick = () => {}, disabled = false }) => {
	return (
		<Button onClick={onClick} disabled={disabled} size="icon">
			<Edit />
		</Button>
	);
};
