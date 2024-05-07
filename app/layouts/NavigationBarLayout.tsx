import { ReactNode } from 'react';

export type NavigationBarLayoutProps = {
	location: ReactNode;
	left?: ReactNode;
	title: ReactNode;
	right?: ReactNode;
};

export const NavigationBarLayout = (
	{ location, left = undefined, title, right = undefined }: NavigationBarLayoutProps,
) => {
	return (
		<div className="flex flex-col w-full gap-y-2">
			{location}
			<div className={`grid grid-cols-3 items-center`}>
				<div className={`justify-self-start`}>{left}</div>
				<div className={`justify-self-center`}>{title}</div>
				<div className={`justify-self-end`}>{right}</div>
			</div>
		</div>
	);
};
