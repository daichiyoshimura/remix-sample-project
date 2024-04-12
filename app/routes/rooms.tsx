import { Outlet } from '@remix-run/react';
import { ContentArea, Footer, Header } from '@components';

const RoomsPageLayout = () => {
	return (
		<>
			<Header currentPageTitle="Rooms" />
			<ContentArea>
				<Outlet />
			</ContentArea>
			<Footer />
		</>
	);
};

export default RoomsPageLayout;
