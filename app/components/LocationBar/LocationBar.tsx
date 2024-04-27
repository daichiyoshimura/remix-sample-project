export type LocationBarProps = {
	pathname: string;
	title: string;
};

export const LocationBar = ({ pathname, title }: LocationBarProps) => {
	return (
		<div className="flex flex-col w-full">
			<h2 className="px-4 text-center text-2xl font-bold">{title}</h2>
			<div className="px-4">
				<p>{pathname}</p>
			</div>
		</div>
	);
};
