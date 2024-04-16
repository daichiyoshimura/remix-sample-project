export type BoxProps = {
	children: React.ReactNode;
};

export const Box = ({ children }: BoxProps) => {
	return (
		<div
			className={`bg-background p-4 mrl-4 rounded-lg shadow-md flex justify-center items-center`}
		>
			{children}
		</div>
	);
};
