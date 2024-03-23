import React from 'react';

interface AlertProps {
	type: 'success' | 'error' | 'warning';
	message: string;
	onClose?: () => void;
}

const Alert = ({ type, message, onClose }: AlertProps) => {
	return (
		<div
			className={`bg-${
				type === 'success'
					? 'green'
					: type === 'error'
					? 'red'
					: 'yellow'
			}-100 border border-${
				type === 'success'
					? 'green'
					: type === 'error'
					? 'red'
					: 'yellow'
			}-400 text-${
				type === 'success'
					? 'green'
					: type === 'error'
					? 'red'
					: 'yellow'
			}-700 px-4 py-3 rounded relative`}
			role="alert"
		>
			<strong className="font-bold">
				{type === 'success'
					? 'Success!'
					: type === 'error'
					? 'Error!'
					: 'Warning!'}
			</strong>
			<span className="block sm:inline">{message}</span>
			{onClose && (
				<span
					className="absolute top-0 bottom-0 right-0 px-4 py-3"
					onClick={onClose}
				>
					<svg
						className="fill-current h-6 w-6 text-black"
						role="button"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<title>Close</title>
						<path d="M14.348 14.849a1 1 0 0 1-1.414 0L10 11.414l-2.929 2.93a1 1 0 1 1-1.414-1.415L8.586 10 5.657 7.071a1 1 0 0 1 1.414-1.414L10 8.586l2.929-2.93a1 1 0 0 1 1.414 1.414L11.414 10l2.93 2.929a1 1 0 0 1 0 1.42z" />
					</svg>
				</span>
			)}
		</div>
	);
};

export default Alert;
