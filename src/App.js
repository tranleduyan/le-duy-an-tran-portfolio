import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {Helmet}  from "react-helmet";
function App() {
  return (
    <div>
      <Helmet>
        <title>Le Duy An Tran</title>
      </Helmet>
        <Navbar/>
        <Home />
        <About />
        <Contact />
    </div>
  );
}

export default App;
