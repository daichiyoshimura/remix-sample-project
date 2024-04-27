export type ContentAreaProps = {
	fadeClass: string;
	children?: React.ReactNode;
};

export const ContentArea = ({ children, fadeClass }: ContentAreaProps) => {
	return (
		<div className={`fixed top-12 bottom-12 pl-32 h-full w-full overflow-y-auto ${fadeClass}`}>
			{children}
		</div>
	);
};
