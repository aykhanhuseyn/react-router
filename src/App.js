import { Routes, Route } from 'react-router-dom';
import { Layout } from './modules/layout';
import { Home, Contact, About, News, SingleNews } from './pages';
import './App.css';

function App() {
	return (
		<>
			{/* <Header /> was here */}
			<Routes>
				{/* layout here */}
				<Route path='/' element={<Layout />}>
					{/* nested routes start */}
					<Route path='news'>
						{/* news/kendde-shok-hadise-244865 */}
						<Route path=':slag' element={<SingleNews />} />
						<Route index element={<News />} />
					</Route>
					<Route path='about' element={<About />} />
					<Route path='contact' element={<Contact />} />
					{/* routes index */}
					{/* index === '/' */}
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
