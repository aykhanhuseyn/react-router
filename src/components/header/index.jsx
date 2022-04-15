import { Link } from 'react-router-dom';

const styles = {
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	link: {
		display: 'flex',
		listStyle: 'none',
		gap: '10px',
	},
};

const links = [
	{
		name: 'home',
		url: '/',
		label: 'Home',
	},
	{
		name: 'news',
		url: '/news',
		label: 'News',
	},
	{
		name: 'kendde',
		url: '/news/kendde',
		label: 'Kendde shok hadise',
	},
	{
		name: 'about',
		url: '/about-us',
		label: 'About us',
	},
	{
		name: 'contact',
		url: '/contact',
		label: 'Contact us',
	},
];

const Header = () => {
	return (
		<header style={styles.header}>
			<span>Header</span>

			<ul style={styles.link}>
				{links.map(({ name, url, label }) => (
					<li key={name}>
						<Link to={url}>{label}</Link>
					</li>
				))}
			</ul>
		</header>
	);
};

export { Header };
