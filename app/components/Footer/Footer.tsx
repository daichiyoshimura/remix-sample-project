import React from 'react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
	return (
		<footer className="fixed bottom-0 left-0 w-full bg-darkslategray text-white py-2 text-center">
			<p>&copy; 2024 All Rights Reserved</p>
		</footer>
	);
};

export default Footer;
