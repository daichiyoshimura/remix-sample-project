import { Link } from '@remix-run/react';
import { Button } from '@components';

export type CautionTextLinkButtonProps = {
	to: string;
	onClick?: () => void;
	disabled?: boolean;
	type?: 'submit' | 'reset' | 'button';
	children: React.ReactNode;
};

export const CautionTextLinkButton = (
	{
		to,
		onClick = () => {},
		disabled = false,
		type = 'button',
		children,
	}: CautionTextLinkButtonProps,
) => {
	return (
		<Link to={to}>
			<Button color="caution" size="text" disabled={disabled} type={type} onClick={onClick}>
				{children}
			</Button>
		</Link>
	);
};
