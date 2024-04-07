import { render } from '@testing-library/react';
import { TextList } from '@components';

describe('TextList component', () => {
	it('renders text list correctly', () => {
		const textList = ['Error 1', 'Error 2', 'Error 3'];
		const { getByText } = render(<TextList textList={textList} />);
		textList.forEach((text) => {
			expect(getByText(text)).toBeInTheDocument();
		});
	});
});
