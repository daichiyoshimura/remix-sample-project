export type ContainerProps = {
	children?: React.ReactNode;
	justify?: 'justify-center' | 'justify-between' | 'justify-end';
};

export const Container = ({ children, justify = 'justify-center' }: ContainerProps) => {
	return <div className={`w-full flex px-4 py-2 gap-4 ${justify}`}>{children}</div>;
};
