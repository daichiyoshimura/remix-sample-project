export type DescriptionTextProps = {
	description: string;
};

export const DescriptionText: React.FC<DescriptionTextProps> = ({ description }) => {
	return <p className="text-sm text-gray-600 mb-4">{description}</p>;
};
