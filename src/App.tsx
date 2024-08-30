import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Explorer from './pages/Explorer/Explorer';
import Academy from './pages/Academy/Academy';
// import Launchpad from './pages/LaunchPad/launchpad';

function App() {
	const [count, setCount] = useState<number>(0); // Example of useState with type annotation

	return (
		<BrowserRouter>
			<Routes>
				{/* <Route path='/' element={<Login />} /> */}
				<Route path='/' element={<Home />} />
				<Route path='/explorer' element={<Explorer />} />
				<Route path='/academy' element={<Academy/>} />
				{/* <Route path='/launchpad' element={<Launchpad/>}/> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;