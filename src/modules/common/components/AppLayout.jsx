import { Outlet } from 'react-router-dom';

function AppLayout() {
	return (
		<>
			<header>header</header>
			<main>
				<Outlet />
			</main>
		</>
	);
}
export default AppLayout;
