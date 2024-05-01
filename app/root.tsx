import '@tailwind.css';
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useNavigation } from '@remix-run/react';
import { Footer, Header, SideBar } from '@components';
import { RootLayout } from '@components/Layouts/RootLayout';

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<RootLayout header={<Header />} footer={<Footer />} sideBar={<SideBar />}>
					{children}
				</RootLayout>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet context={useNavigation()} />;
}
