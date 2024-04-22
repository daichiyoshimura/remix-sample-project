export const isStageDev = (): boolean => {
	return process.env.NODE_ENV === 'development';
};

export const isStageProd = (): boolean => {
	return process.env.NODE_ENV === 'production';
};

export const isStageTest = (): boolean => {
	return process.env.NODE_ENV === 'test';
};
