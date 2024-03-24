import '../styles/components/Footer.css';

interface FooterProps {
	copyRights: string;
}

const Footer: React.FC<FooterProps> = ({copyRights}) => {
	return (
		<footer className="footer">
			<p>&copy; {copyRights}</p>
		</footer>
	);
};

export default Footer;
