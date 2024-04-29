import { AccountIcon } from '@components';

interface ImageBoxProps {
	url: string;
}

export const ImageBox = ({ url }: ImageBoxProps) => {
	return (
		<div className="relative w-48 h-48 overflow-hidden">
			{url ? (
				<img
					src={url}
					alt="Participant"
					className="object-cover w-full h-full rounded-md"
				/>
			) : (
				<div className="flex items-center justify-center w-full h-full bg-gray-300 rounded-md">
					<AccountIcon size="xl" className="text-gray-600 text-4xl" />
				</div>
			)}
		</div>
	);
};
