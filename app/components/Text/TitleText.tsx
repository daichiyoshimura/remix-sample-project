export type TitleTextProps = {
	title: string;
};

export const TitleText = ({ title }: TitleTextProps) => {
	return <h2 className="text-lg font-bold">{title}</h2>;
};
