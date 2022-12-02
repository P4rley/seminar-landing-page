import Hero from "./components/Hero";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Speaker from "./components/Speaker";
import Benefit from "./components/Benefit";
import Register from "./components/Register";
import Top from "./components/Top";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Navbar />
      <Hero />
      <About />
      <Speaker />
      <Benefit />
      <Register />
      <Top />
    </div>
  );
}

export default App;
