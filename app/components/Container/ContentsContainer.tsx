export const ContentsContainer = (
	{ children, fadeClass }: { fadeClass: string; children?: React.ReactNode },
) => {
	return <div className={`h-full grow flex flex-col ${fadeClass}`}>{children}</div>;
};
