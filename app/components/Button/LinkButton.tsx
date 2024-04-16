import { Link } from '@remix-run/react';
import { Button } from '@components';

export type LinkButtonProps = {
	to: string;
	children: React.ReactNode;
};

export const LinkButton = ({ to, children }: LinkButtonProps) => {
	return (
		<Link to={to}>
			<Button>{children}</Button>
		</Link>
	);
};
