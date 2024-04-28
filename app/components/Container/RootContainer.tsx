export const RootContainer = ({ children }: { children: React.ReactNode }) => {
	return <div className={`fixed top-12 bottom-10 w-full bg-gray-300 flex`}>{children}</div>;
};
