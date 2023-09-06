import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Pagenotfound from "./pages/Pagenotfound";

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/services' element={<Services />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='*' element={<Pagenotfound />} />
			</Routes>
		</>
	);
}

export default App;
