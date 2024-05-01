export const DangerZone = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="bg-red-500 bg-opacity-10 rounded-lg p-4 border border-red-500 w-full flex justify-between gap-x-4">
			{children}
		</div>
	);
};
