import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
	return (
		<>
			<div>
				<Navbar />
				<Skills />
				<Home />
				<Projects />
			</div>
		</>
	);
}

export default App;
