import { Link } from '@remix-run/react';
import { Button } from '@components';

export type LinkButtonProps = {
	to: string;
	children: React.ReactNode;
};

export const LinkButton: React.FC<LinkButtonProps> = ({ to, children }) => {
	return (
		<Link to={to}>
			<Button>{children}</Button>
		</Link>
	);
};
