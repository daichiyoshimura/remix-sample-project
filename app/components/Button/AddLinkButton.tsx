import { Link } from '@remix-run/react';
import { AddIcon, Button } from '@components';

export type AddLinkButtonProps = {
	to: string;
};

export const AddLinkButton = ({ to }: AddLinkButtonProps) => {
	return (
		<Link to={to}>
			<Button>
				<AddIcon />
			</Button>
		</Link>
	);
};
