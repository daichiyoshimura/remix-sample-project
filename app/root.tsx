import '@tailwind.css';
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useNavigation } from '@remix-run/react';
import { useFadeAnimation } from '@hooks';
import { ContentArea, Footer, Header } from '@components';

export function Layout({ children }: { children: React.ReactNode }) {
	const fadeClassName = useFadeAnimation();
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Header currentPageTitle="Rooms" />
				<div className={fadeClassName()}>
					<ContentArea>{children}</ContentArea>
				</div>
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
