import { Button } from '@components';

export type SafeTextButtonProps = {
	onClick?: () => void;
	caption: string;
	type?: 'submit' | 'reset' | 'button';
	disabled?: boolean;
};

export const SafeTextButton = (
	{ onClick, caption, type = 'button', disabled = false }: SafeTextButtonProps,
) => {
	return (
		<Button color={'safe'} onClick={onClick} type={type} disabled={disabled}>
			<p>{caption}</p>
		</Button>
	);
};
