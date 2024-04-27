import { Link } from '@remix-run/react';
import { Button, ButtonColors } from '@components';

export type LinkButtonProps = {
	to: string;
	color?: ButtonColors;
	children: React.ReactNode;
};

export const LinkButton = ({ to, children, color = 'default' }: LinkButtonProps) => {
	return (
		<Link to={to}>
			<Button color={color}>{children}</Button>
		</Link>
	);
};
