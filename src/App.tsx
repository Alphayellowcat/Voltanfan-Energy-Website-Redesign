import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main className="pt-16"> {/* Add padding-top to prevent content from being hidden behind the fixed header */}
        <Home />
        <Products />
        <Solutions />
        <Services />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;