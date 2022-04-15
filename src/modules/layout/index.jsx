import { Outlet } from 'react-router-dom';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

export const Layout = () => {
	return (
		<>
			<Header />
			<main style={{ minHeight: 'calc(100vh - 120px)' }}>
				{/* pages will be rendered here */}
				<Outlet />
			</main>
			<Footer />
		</>
	);
};
