export const ContentsLayout = (
	{ children, className = '' }: { className?: string; children?: React.ReactNode },
) => {
	return <div className={`h-full grow flex flex-col ${className}`}>{children}</div>;
};
