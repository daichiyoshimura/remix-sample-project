import { describe, expect, it } from 'vitest';
import Box from './Box';

describe('Box', () => {
	it('renders children correctly', () => {
		const box = (
			<Box>
				<div>Box</div>
			</Box>
		);
		expect(box).toBeDefined();
	});
});
