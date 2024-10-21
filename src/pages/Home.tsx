import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">清洁能源的未来</h1>
            <p className="text-xl mb-6">Voltafan 提供高效、可持续、灵活、可靠的光伏能源解决方案，为您的生活和业务带来绿色动力。</p>
            <a href="#contact" className="inline-flex items-center bg-white text-blue-600 font-semibold py-2 px-4 rounded-full hover:bg-blue-100 transition duration-300">
              联系我们
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Solar panels" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;