import { Button } from '@components';

export type TextButtonProps = {
	onClick: () => void;
	caption: string;
	type?: 'submit' | 'reset' | 'button';
	disabled?: boolean;
};

export const TextButton = (
	{ onClick, caption, type = 'button', disabled = false }: TextButtonProps,
) => {
	return (
		<Button onClick={onClick} type={type} disabled={disabled}>
			<p>{caption}</p>
		</Button>
	);
};
