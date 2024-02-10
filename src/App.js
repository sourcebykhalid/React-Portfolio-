import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Projects from "./Components/Projects/Projects";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
// import Card from "./Components/Card/Card";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Projects />
      <Portfolio />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
