import { Link } from '@remix-run/react';
import { Button } from '@components';

export type TextLinkButtonProps = {
	to: string;
	caption: string;
	disabled?: boolean;
};

export const TextLinkButton = ({ to, caption, disabled = false }: TextLinkButtonProps) => {
	return (
		<Link to={to}>
			<Button disabled={disabled}>
				<p>{caption}</p>
			</Button>
		</Link>
	);
};
