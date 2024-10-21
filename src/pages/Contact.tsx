import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">联系我们</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <form className="bg-white rounded-lg shadow-md p-8">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">姓名</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">邮箱</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">留言</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">发送消息</button>
            </form>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-white rounded-lg shadow-md p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">联系方式</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold">邮箱</h4>
                    <p>info@voltafan.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold">电话</h4>
                    <p>+86 123 4567 8900</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold">地址</h4>
                    <p>中国上海市浦东新区科技园区</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;