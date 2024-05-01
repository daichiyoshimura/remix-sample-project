import { ReactNode } from 'react';

export type ModalLayoutProps = {
	children: ReactNode;
};

export const ModalLayout = ({ children }: ModalLayoutProps) => {
	return <div className={`w-full flex flex-col justify-start gap-y-4`}>{children}</div>;
};
