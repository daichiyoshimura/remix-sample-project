import { ReactNode } from 'react';

export type SplitPaneLayoutProps = {
	top?: ReactNode;
	bottom?: ReactNode;
};

export const SplitPaneLayout = ({ top, bottom }: SplitPaneLayoutProps) => {
	return (
		<div className={`h-full grow flex flex-col`}>
			<div className={`h-38 pb-4 pt-2 px-4 shrink-0 flex flex-col gap-y-2`}>{top}</div>
			<div className={`bg-gray-100 pt-4 pb-2 px-4 flex flex-col gap-y-8 grow overflow-auto`}>
				{bottom}
			</div>
		</div>
	);
};
