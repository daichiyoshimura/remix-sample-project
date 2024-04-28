import { Navigation, Outlet, useLoaderData, useLocation, useOutletContext } from '@remix-run/react';
import {
	LinkButton,
	Container,
	LocationBar,
	EditIcon,
	CautionTextLinkButton,
	ContentsTopContainer,
	ContentsBottomContainer,
	StartContainer,
} from '@components';
import { ParticipantCardList, RoomProfile } from '@features';
import { roomProfilePageAction } from '@server/actions';
import { roomProfilePageLoader } from '@server/loaders';

export const loader = roomProfilePageLoader;

export const action = roomProfilePageAction;

const RoomProfilePage = () => {
	const loaderData = useLoaderData<typeof loader>();
	if ('message' in loaderData) {
		throw Error(loaderData.message);
	}
	const { id, name, createdAt, participants } = loaderData;

	const { pathname } = useLocation();

	return (
		<>
			<ContentsTopContainer>
				<Container>
					<LocationBar pathname={pathname} title={'Room Profile'} />
				</Container>
				<StartContainer>
					<LinkButton to={'/rooms'}>Back</LinkButton>
				</StartContainer>
			</ContentsTopContainer>
			<ContentsBottomContainer>
				<Container>
					<RoomProfile
						id={id}
						name={name}
						createdAt={createdAt}
						LinkButton={
							<LinkButton to={`/rooms/${id}/edit`}>
								<EditIcon />
							</LinkButton>
						}
					/>
				</Container>
				<Container>
					<ParticipantCardList participants={participants} />
				</Container>
				<Container>
					<CautionTextLinkButton to={`/rooms/${id}/delete`}>
						Delete This Room
					</CautionTextLinkButton>
				</Container>
			</ContentsBottomContainer>
			<Outlet context={useOutletContext<Navigation>()} />
		</>
	);
};

export default RoomProfilePage;
