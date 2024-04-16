import { SaveIcon, Button } from '@components';

export type SaveButtonProps = {
	onClick?: () => void;
	disabled?: boolean;
};

export const SaveButton = ({ onClick = () => {}, disabled = false }: SaveButtonProps) => {
	return (
		<Button onClick={onClick} disabled={disabled} size="icon">
			<SaveIcon />
		</Button>
	);
};
