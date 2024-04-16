export type ErrorTextProps = {
	value: string;
};

export const ErrorText = ({ value }: ErrorTextProps) => {
	return <div className="text-sm text-red-500 mb-4">{value}</div>;
};
