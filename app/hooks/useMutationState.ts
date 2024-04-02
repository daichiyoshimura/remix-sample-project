import { useState } from 'react';

export type MutationState = 'loading' | 'success' | 'failure' | 'init';
export type SetMutationState = React.Dispatch<
	React.SetStateAction<MutationState>
>;

export const useMutationState = (init: MutationState): [
	status: MutationState,
	setStatus: SetMutationState,
] => {
	return useState<MutationState>(init);
};
