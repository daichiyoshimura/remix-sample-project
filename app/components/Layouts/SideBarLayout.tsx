import { ReactNode } from 'react';

export type SideBarLayoutProps = {
	left: ReactNode;
	right: ReactNode;
};

export const SideBarLayout = ({ left, right }: SideBarLayoutProps) => {
	return (
		<>
			<div className={`w-32 h-full shrink-0 z-10`}>{left}</div>
			<div className={`h-full grow flex flex-col`}>{right}</div>
		</>
	);
};
