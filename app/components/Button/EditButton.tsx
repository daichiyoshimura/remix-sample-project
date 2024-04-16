import { EditIcon, Button } from '@components';

export type EditButtonProps = {
	onClick?: () => void;
	disabled?: boolean;
};

export const EditButton = ({ onClick = () => {}, disabled = false }: EditButtonProps) => {
	return (
		<Button onClick={onClick} disabled={disabled} size="icon">
			<EditIcon />
		</Button>
	);
};
