import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import {
	Dashboard,
	Tabla,
	Reporte

} from '../pages';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navbar />}>
				<Route index element={<Dashboard />} />
					<Route
					/>
					<Route path='Tabla' element={<Tabla />} />
					<Route path='Reporte' element={<Reporte />} />




				</Route>
			</Routes>
		</>
	);
};
