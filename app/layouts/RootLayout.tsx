import { ReactNode } from 'react';

export type RootLayoutProps = {
	header: ReactNode;
	footer: ReactNode;
	sideBar: ReactNode;
	children: ReactNode;
};

export const RootLayout = ({ header, footer, sideBar, children }: RootLayoutProps) => {
	return (
		<>
			{header}
			<div
				className={`fixed h-full w-full grid grid-cols-[11rem,auto] grid-rows-[3rem,auto,3rem] bg-gray-300`}
			>
				<div className="col-start-1 row-start-2">{sideBar}</div>
				<div className="col-start-2 row-span-3">{children}</div>
			</div>
			{footer}
		</>
	);
};
