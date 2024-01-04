import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from './modules/common/components/';
import { Home, Login, Signup } from './pages';
import { LOGIN, SIGN_UP } from './constants/routes';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AppLayout />}>
					<Route path={LOGIN} element={<Login />} />
					<Route path={SIGN_UP} element={<Signup />} />
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
