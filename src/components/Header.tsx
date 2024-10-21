import React, { useState, useEffect } from 'react';
import { Sun, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-blue-600 bg-opacity-90'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Sun className="h-8 w-8 text-white mr-2" />
          <span className="text-2xl font-bold text-white">Voltafan</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          {['首页', '产品', '解决方案', '服务', '案例', '联系我们'].map((item) => (
            <a
              key={item}
              href={`#${item === '首页' ? 'home' : item}`}
              className={`${isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-2 bg-blue-600">
            {['首页', '产品', '解决方案', '服务', '案例', '联系我们'].map((item) => (
              <a
                key={item}
                href={`#${item === '首页' ? 'home' : item}`}
                className="text-white hover:text-blue-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;