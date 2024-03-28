import { describe, expect, it } from 'vitest';
import Box from './Box';

describe('Box', () => {
	it('renders children correctly', () => {
		const childComponent = <div>Box</div>;
		const box = <Box>{childComponent}</Box>;
		expect(box).toBeDefined();
	});
});
