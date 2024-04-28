export type LocationBarProps = {
	pathname: string;
	title: string;
};

export const LocationBar = ({ pathname, title }: LocationBarProps) => {
	return (
		<div className="flex flex-col w-full">
			<p>{pathname}</p>
			<h2 className="text-center text-2xl font-bold">{title}</h2>
		</div>
	);
};
