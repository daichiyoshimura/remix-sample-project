import { useState } from 'react';

export type MutationStatus = 'loading' | 'success' | 'failure' | 'init';
export type SetMutationStatus = React.Dispatch<
	React.SetStateAction<MutationStatus>
>;

export const useMutationState = (init: MutationStatus): [
	status: MutationStatus,
	setStatus: SetMutationStatus,
] => {
	return useState<MutationStatus>(init);
};
