import { Navigation, Outlet, useOutletContext } from '@remix-run/react';
import { ContentArea, Footer, Header } from '@components';

const RoomsPageLayout = () => {
	return (
		<>
			<Header currentPageTitle="Rooms" />
			<ContentArea>
				<Outlet context={useOutletContext<Navigation>()} />
			</ContentArea>
			<Footer />
		</>
	);
};

export default RoomsPageLayout;
