import { useFadeAnimation } from '@hooks';

export type ContentAreaProps = {
	children?: React.ReactNode;
};

export const ContentArea = ({ children }: ContentAreaProps) => {
	const fadeClass = useFadeAnimation();
	return (
		<div className={`relative top-12 bottom-12 pl-32 h-full overflow-y-auto ${fadeClass()}`}>
			{children}
		</div>
	);
};
