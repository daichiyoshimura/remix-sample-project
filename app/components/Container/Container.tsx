export type ContainerProps = {
	children?: React.ReactNode;
	alignment?: 'center' | 'right';
};

export const Container: React.FC<ContainerProps> = ({ children, alignment = 'center' }) => {
	const justify = alignment === 'center' ? 'justify-center' : 'justify-end';
	return <div className={`flex mt-4 gap-4 ${justify}`}>{children}</div>;
};
