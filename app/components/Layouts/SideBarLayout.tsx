import { ReactNode } from 'react';

export type SideBarLayoutProps = {
	sideBar: ReactNode;
	children: ReactNode;
};

export const SideBarLayout = ({ sideBar, children }: SideBarLayoutProps) => {
	return (
		<div className="flex w-full">
			<div className={`w-32 h-full shrink-0 z-10`}>{sideBar}</div>
			<div className={`h-full grow flex flex-col`}>{children}</div>
		</div>
	);
};
