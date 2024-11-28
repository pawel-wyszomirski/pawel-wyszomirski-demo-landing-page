import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Services } from './components/Services';
import { WhyMe } from './components/WhyMe';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <WhyMe />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;