import { z } from 'zod';

export const validateZodObject = (v: z.ZodTypeAny, body: unknown): [boolean, string[]] => {
	const result = v.safeParse(body);
	if (result.success) {
		return [true, []];
	}
	return [false, result.error.issues.map((issue) => issue.message)];
};

// new version
const validate = <T>(rule: z.ZodType<T>, target: T): [boolean, string[]] => {
	const result = rule.safeParse(target);
	if (result.success) {
		return [true, []];
	}
	return [false, result.error.issues.map((issue) => issue.message)];
};

const nameRule = z
	.string()
	.min(1)
	.max(64)
	.regex(/^[^\W_]*$/, 'alphanumeric characters only, excluding symbols and spaces');

export const validateRoomName = (name: string) => validate(nameRule, name);
