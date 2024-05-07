import { z } from 'zod';

export const validate = <T>(rule: z.ZodType<T>, target: T): [boolean, string[]] => {
	const result = rule.safeParse(target);
	if (result.success) {
		return [true, []];
	}
	return [false, result.error.issues.map((issue) => issue.message)];
};

export const roomNameRule = z
	.string()
	.min(1)
	.max(64)
	.regex(/^[^\W_]*$/, 'alphanumeric characters only, excluding symbols and spaces');
