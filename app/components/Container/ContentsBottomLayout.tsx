export const ContentsBottomLayout = ({ children }: { children?: React.ReactNode }) => {
	return (
		<div className={`bg-gray-100 pt-4 pb-2 px-4 flex flex-col gap-y-8 grow overflow-auto`}>
			{children}
		</div>
	);
};
