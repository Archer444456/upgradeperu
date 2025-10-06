import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import N8nChatButton from './components/N8nChatButton';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <N8nChatButton />
    </div>
  );
}

export default App;
