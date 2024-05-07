import { Link } from '@remix-run/react';
import { Button, EditIcon } from '@components';

export type EditLinkButtonProps = {
	to: string;
};

export const EditLinkButton = ({ to }: EditLinkButtonProps) => {
	return (
		<Link to={to}>
			<Button>
				<EditIcon />
			</Button>
		</Link>
	);
};
