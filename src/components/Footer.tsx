import React from 'react';
import { Sun, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <Sun className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-2xl font-bold">Voltafan</span>
            </div>
            <p className="text-sm">提供高效、可持续、灵活、可靠的能源解决方案</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-400">首页</a></li>
              <li><a href="#products" className="hover:text-blue-400">产品</a></li>
              <li><a href="#solutions" className="hover:text-blue-400">解决方案</a></li>
              <li><a href="#services" className="hover:text-blue-400">服务</a></li>
              <li><a href="#case-studies" className="hover:text-blue-400">案例</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <p className="mb-2">邮箱：info@voltafan.com</p>
            <p className="mb-2">电话：+86 123 4567 8900</p>
            <p>地址：中国上海市浦东新区科技园区</p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">关注我们</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook /></a>
              <a href="#" className="hover:text-blue-400"><Twitter /></a>
              <a href="#" className="hover:text-blue-400"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          <p>&copy; 2024 Voltafan 能源科技有限公司. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;