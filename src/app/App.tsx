import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageWelcome } from '../common/pages/PageWelcome';
import { PageBooks } from '../common/pages/PageBooks';
import { PageCart } from '../common/pages/PageCart';

function App() {
	return (
		<div className="App">
			<h1>Redux Shop</h1>
			<nav>
				<NavLink to="/welcome">Welcome</NavLink>
				<NavLink to="/books">Books</NavLink>
				<NavLink to="/cart">Cart</NavLink>
			</nav>

			<Routes>
				<Route path="/welcome" element={<PageWelcome />} />
				<Route path="/books" element={<PageBooks />} />
				<Route path="/cart" element={<PageCart />} />
				<Route path="/" element={<Navigate to="/welcome" replace />} />
			</Routes>
		</div>
	);
}

export default App;
