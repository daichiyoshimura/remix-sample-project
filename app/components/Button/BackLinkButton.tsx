import { Link } from '@remix-run/react';
import { BackIcon, Button } from '@components';

export type BackLinkButtonProps = {
	to: string;
};

export const BackLinkButton = ({ to }: BackLinkButtonProps) => {
	return (
		<Link to={to}>
			<Button>
				<BackIcon />
			</Button>
		</Link>
	);
};
