import React from 'react';
import { Wrench, BarChart, Zap, ArrowRight } from 'lucide-react';

const ServiceCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:shadow-xl">
    <div className="text-blue-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a href="#" className="inline-flex items-center text-blue-500 hover:text-blue-600">
      了解更多 <ArrowRight className="ml-1 h-4 w-4" />
    </a>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">技术服务</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="技术支持"
            description="我们的专业团队提供全天候技术支持，确保您的系统始终保持最佳性能。"
            icon={<Wrench className="h-12 w-12" />}
          />
          <ServiceCard
            title="能源管理系统"
            description="先进的能源管理系统帮助您实时监控和优化能源使用，提高效率并降低成本。"
            icon={<BarChart className="h-12 w-12" />}
          />
          <ServiceCard
            title="系统升级"
            description="我们提供系统升级服务，帮助您的能源系统始终保持最新、最高效的状态。"
            icon={<Zap className="h-12 w-12" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;