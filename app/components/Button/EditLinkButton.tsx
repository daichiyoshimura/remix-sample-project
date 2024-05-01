import { Link } from '@remix-run/react';
import { AddIcon, Button } from '@components';

export type EditLinkButtonProps = {
	to: string;
};

export const EditLinkButton = ({ to }: EditLinkButtonProps) => {
	return (
		<Link to={to}>
			<Button>
				<AddIcon />
			</Button>
		</Link>
	);
};
