import type { MetaFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';

export const meta: MetaFunction = () => {
	return [
		{ title: 'New Remix App' },
		{ name: 'description', content: 'Welcome to Remix!' },
		{ charSet: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
	];
};

export function loader() {
	return redirect('/rooms');
}
