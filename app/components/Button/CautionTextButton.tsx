import { Button } from '@components';

export type CautionTextButtonProps = {
	onClick?: () => void;
	caption: string;
	type?: 'submit' | 'reset' | 'button';
	disabled?: boolean;
};

export const CautionTextButton = (
	{ onClick, caption, type = 'button', disabled = false }: CautionTextButtonProps,
) => {
	return (
		<Button color={'caution'} onClick={onClick} type={type} disabled={disabled}>
			<p>{caption}</p>
		</Button>
	);
};
