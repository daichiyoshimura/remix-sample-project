import { ErrorText } from '@components';

export type TextListProps = {
	textList: string[];
};

export const TextList: React.FC<TextListProps> = ({ textList }) => {
	return (
		<>
			{textList.map((text, index) => (
				<ErrorText key={index} value={text} />
			))}
		</>
	);
};
