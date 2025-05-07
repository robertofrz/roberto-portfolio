import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./utils/i18next/i18n";

function App() {
  return (
    <div className="overflow-x-hidden w-[100vw] flex flex-col items-center m-auto bg-zinc-50 dark:bg-zinc-950">
      <Header />
      <Welcome />
      <Stack />
      <Projects />
      <Timeline />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
