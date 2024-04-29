export const FlexStart = (
	{ className = '', children }: { className: string; children?: React.ReactNode },
) => {
	return (
		<div className={`w-full flex justify-start align-middle gap-x-4 ${className}`}>
			{children}
		</div>
	);
};
