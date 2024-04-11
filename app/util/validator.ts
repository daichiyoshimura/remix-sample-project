import { z } from 'zod';

export const validateZodObject = (v: z.ZodTypeAny, body: unknown): [boolean, string[]] => {
	const result = v.safeParse(body);
	if (result.success) {
		return [true, []];
	}
	return [false, result.error.issues.map((issue) => issue.message)];
};
