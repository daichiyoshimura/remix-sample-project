import { render } from '@testing-library/react';
import { ErrorTextList } from '@components';

describe('TextList component', () => {
	it('renders text list correctly', () => {
		const textList = ['Error 1', 'Error 2', 'Error 3'];
		const { getByText } = render(<ErrorTextList textList={textList} />);
		textList.forEach((text) => {
			expect(getByText(text)).toBeInTheDocument();
		});
	});
});
