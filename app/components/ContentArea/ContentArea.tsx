export type ContentAreaProps = {
	children?: React.ReactNode;
};

export const ContentArea: React.FC<ContentAreaProps> = ({ children }) => {
	return <div className="relative top-16 bottom-16 h-full overflow-y-auto">{children}</div>;
};
