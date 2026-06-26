import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Videos from './components/Videos';
import Songs from './components/Songs';
import Shows from './components/Shows';
import Reviews from './components/Reviews';
import Booking from './components/Booking';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#050505' }}>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Videos />
        <Songs />
        <Reviews />
        <Shows />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
