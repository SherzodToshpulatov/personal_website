import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="bg-gray-950 text-gray-100 font-sans">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <About />
        <Experience/>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
