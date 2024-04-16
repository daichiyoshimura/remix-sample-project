import { ErrorText } from '@components';

export type ErrorTextListProps = {
	textList: string[];
};

export const ErrorTextList = ({ textList }: ErrorTextListProps) => {
	return (
		<>
			{textList.map((text, index) => (
				<ErrorText key={index} value={text} />
			))}
		</>
	);
};
