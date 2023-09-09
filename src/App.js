import { Route, Routes } from "react-router-dom";
import "./App.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
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
