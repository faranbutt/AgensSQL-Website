import Engine from './components/EngineFeatures/Engine';
import Enterprise from './components/Enterprise/Enterprise';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <div>
        <div className="mb-10 md:mb-36">
          <Navbar />
        </div>
        <div className='md:pt-10'>
          <Hero />
        </div>
        <div>
        <Features />
        <Engine />
        <Enterprise />
        <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
