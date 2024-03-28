import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
	it('renders with correct class', async () => {
		const { container } = render(<Footer />);
		const footer = container.querySelector('footer');
		expect(footer).not.toBeNull(); 
		expect(footer?.className).toContain(
			'fixed bottom-0 left-0 w-full bg-darkslategray text-white py-2 text-center',
		); 
	});
});
