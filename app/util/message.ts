import { MappedTypes } from '@util';

export type Message = MappedTypes<{
	message: string;
}>;

export type MessageWithSuccess = MappedTypes<{
	success: boolean;
	message: string;
}>;
