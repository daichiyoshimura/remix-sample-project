export type TitleTextProps = {
	title: string;
};

export const TitleText = ({ title }: TitleTextProps) => {
	return <h2 className="text-2xl font-bold">{title}</h2>;
};
