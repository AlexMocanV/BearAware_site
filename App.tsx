import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Documentation from './components/Documentation';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GitHubButton from './components/GitHubButton';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Documentation />
        <Team />
        <Contact />
      </main>
      <Footer />
      <GitHubButton />
    </div>
  );
}

export default App;
