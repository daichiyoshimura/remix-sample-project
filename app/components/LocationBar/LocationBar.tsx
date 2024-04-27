export type LocationBarProps = {
	pathname: string;
	title: string;
};

export const LocationBar = ({ pathname, title }: LocationBarProps) => {
	return (
		<div className="flex flex-col w-full">
			<p className="px-4">{pathname}</p>
			<h2 className="px-4 text-center text-2xl font-bold">{title}</h2>
		</div>
	);
};
