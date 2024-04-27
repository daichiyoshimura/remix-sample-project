export type ContentAreaProps = {
	children?: React.ReactNode;
};

export const ContentArea = ({ children }: ContentAreaProps) => {
	return <div className="relative top-16 bottom-16 pl-32 h-full overflow-y-auto">{children}</div>;
};
