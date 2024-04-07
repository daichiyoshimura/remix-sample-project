import { ErrorText } from '@components';

export type ErrorTextListProps = {
	textList: string[];
};

export const ErrorTextList: React.FC<ErrorTextListProps> = ({ textList }) => {
	return (
		<>
			{textList.map((text, index) => (
				<ErrorText key={index} value={text} />
			))}
		</>
	);
};
