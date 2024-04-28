export const DangerZoneContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="bg-red-500 bg-opacity-10 rounded-lg p-4 border border-red-500">
			{children}
		</div>
	);
};
