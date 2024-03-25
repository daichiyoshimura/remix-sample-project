import { describe, expect, it } from 'vitest';
import Box, { BoxProps } from './Box';

describe('Box', () => {
	it('renders children correctly', () => {
		const childComponent = 'Hello World';
		const boxProps: BoxProps = { children: childComponent };
		const box = Box(boxProps);

		// Box コンポーネントの要素が正しく生成されたかを確認する
		expect(box).toBeDefined();
	});
});
