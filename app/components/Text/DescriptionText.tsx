export type DescriptionTextProps = {
	description: string;
};

export const DescriptionText = ({ description }: DescriptionTextProps) => {
	return <p className="text-sm text-gray-600 align-middle">{description}</p>;
};
