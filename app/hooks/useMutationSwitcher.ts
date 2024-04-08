import { MutationState } from '@hooks';

type Render = () => JSX.Element;

export const useMutationSwitcher = (
	state: MutationState,
	init: Render,
	loading: Render,
	success: Render,
	failure: Render,
): JSX.Element => {
	switch (state) {
		case 'init':
			return init();
		case 'loading':
			return loading();
		case 'success':
			return success();
		case 'failure':
			return failure();
		default:
			return init();
	}
};
