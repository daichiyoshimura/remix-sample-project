import '@tailwind.css';
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useNavigation } from '@remix-run/react';
import { useFadeAnimation } from '@hooks';
import { ContentsLayout, Footer, Header, Menu, RootLayout, SideBarLayout } from '@components';

export function Layout({ children }: { children: React.ReactNode }) {
	const fadeClass = useFadeAnimation();
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Header />
				<RootLayout>
					<SideBarLayout>
						<Menu />
					</SideBarLayout>
					<ContentsLayout className={fadeClass()}>{children}</ContentsLayout>
				</RootLayout>
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
