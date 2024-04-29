import { ReactNode } from 'react';

export type RootLayoutProps = {
	header: ReactNode;
	footer: ReactNode;
	children: ReactNode;
};

export const RootLayout = ({ header, footer, children }: RootLayoutProps) => {
	return (
		<>
			{header}
			<div className={`fixed top-12 bottom-10 w-full bg-gray-300 flex`}>{children}</div>
			{footer}
		</>
	);
};
