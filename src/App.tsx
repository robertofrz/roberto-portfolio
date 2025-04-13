import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Welcome from "./components/Welcome";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./utils/i18next/i18n";

function App() {
  return (
    <div className="overflow-x-hidden w-[100vw] flex flex-col items-center">
      <Header />
      <Welcome />
      <Stack />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
