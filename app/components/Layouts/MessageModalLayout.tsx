import { ReactNode } from 'react';

export type MessageModalLayoutProps = {
	title: ReactNode;
	description: ReactNode;
	buttons: ReactNode;
};

export const MessageModalLayout = ({ title, description, buttons }: MessageModalLayoutProps) => {
	return (
		<div className={`w-full flex flex-col justify-start gap-y-4`}>
			{title}
			{description}
			<div className={`w-full flex justify-end gap-x-4`}>{buttons}</div>
		</div>
	);
};
