import '@tailwind.css';
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useNavigation } from '@remix-run/react';
import { useFadeAnimation } from '@hooks';
import { ContentsContainer, Footer, Header, Menu, MenuContainer, RootContainer } from '@components';

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
				<RootContainer>
					<MenuContainer>
						<Menu />
					</MenuContainer>
					<ContentsContainer fadeClass={fadeClass()}>{children}</ContentsContainer>
				</RootContainer>
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
