export const getFormDataValue = (formData: FormData, key: string): string | null => {
	const entry = formData.get(key);
	return entry !== null ? entry.toString() : null;
};
