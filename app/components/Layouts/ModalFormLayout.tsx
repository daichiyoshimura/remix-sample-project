import { ReactNode } from 'react';

export type ModalFormLayoutProps = {
	inputs: ReactNode;
	buttons: ReactNode;
};

export const ModalFormLayout = ({ inputs, buttons }: ModalFormLayoutProps) => {
	return (
		<div className={`w-full flex flex-col justify-start gap-y-4`}>
			{inputs}
			<div className={`w-full flex justify-end gap-x-4`}>{buttons}</div>;
		</div>
	);
};
