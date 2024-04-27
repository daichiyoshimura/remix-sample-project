export type ContentAreaProps = {
	children?: React.ReactNode;
};

export const ContentArea = ({ children }: ContentAreaProps) => {
	return <div className="relative top-12 bottom-12 pl-32 h-full overflow-y-auto">{children}</div>;
};
