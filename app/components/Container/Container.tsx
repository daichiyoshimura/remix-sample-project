export type ContainerProps = {
	children?: React.ReactNode;
	alignment?: 'center' | 'right';
};

export const Container = ({ children, alignment = 'center' }: ContainerProps) => {
	const justify = alignment === 'center' ? 'justify-center' : 'justify-end';
	return <div className={`flex mt-4 gap-4 ${justify}`}>{children}</div>;
};
