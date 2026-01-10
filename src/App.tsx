import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientCarousel from './components/ClientCarousel';
import Solutions from './components/Solutions';
import Industries from './components/Industries';
import TrackRecord from './components/TrackRecord';
import WhyChoose from './components/WhyChoose';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ClientCarousel />
      <Solutions />
      <Industries />
      <TrackRecord />
      <WhyChoose />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;