export const Grid = ({ children }: { children?: React.ReactNode }) => {
	return (
		<div
			className={`w-full grid grid-cols-[repeat(auto-fill,minmax(theme(spacing.60),1fr))] grid-flow-row gap-4`}
		>
			{children}
		</div>
	);
};
