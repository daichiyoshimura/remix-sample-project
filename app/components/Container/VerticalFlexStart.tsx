export const VerticalFlexStart = (
	{ className, children }: { className?: string; children?: React.ReactNode },
) => {
	return (
		<div className={`w-full flex flex-col justify-start gap-y-4 ${className}`}>{children}</div>
	);
};
