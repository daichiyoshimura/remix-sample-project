export type CardProps = {
	children: React.ReactNode;
};

export const Card = ({ children }: CardProps) => {
	return (
		<div className="flex flex-col rounded items-center bg-primary text-white p-4">
			{children}
		</div>
	);
};
