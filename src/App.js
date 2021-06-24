import "./App.css";
import About from "./components/About";
import Education from "./components/Education";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Home />
      <About />
      <Education />
      <Services />
      <Portfolio />
    </div>
  );
}

export default App;
