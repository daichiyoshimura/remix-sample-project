import '@tailwind.css';
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useNavigation } from '@remix-run/react';
import { useFadeAnimation } from '@hooks';
import { ContentArea, Footer, Header, Menu } from '@components';

export function Layout({ children }: { children: React.ReactNode }) {
	const fadeClass = useFadeAnimation();
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body className="bg-gray-300">
				<Header />
				<Menu />
				<ContentArea fadeClass={fadeClass()}>{children}</ContentArea>
				<Footer />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet context={useNavigation()} />;
}
