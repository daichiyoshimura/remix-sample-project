export type TitleTextProps = {
	title: string;
};

export const TitleText: React.FC<TitleTextProps> = ({ title }) => {
	return <h2 className="text-lg font-bold">{title}</h2>;
};
