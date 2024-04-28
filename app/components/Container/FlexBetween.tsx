export const FlexBetween = ({ children }: { children?: React.ReactNode }) => {
	return <div className={`w-full flex justify-between gap-x-4`}>{children}</div>;
};
