import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Welcome from './sections/Welcome';
import About from './sections/About';
import Products from './sections/Products';
import WhyChooseUs from './sections/WhyChooseUs';
import HowToOrder from './sections/HowToOrder';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="font-sans bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <About />
        <Products />
        <WhyChooseUs />
        <HowToOrder />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;