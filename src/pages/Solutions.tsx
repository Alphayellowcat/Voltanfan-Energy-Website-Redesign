import React from 'react';
import { Home, Building2, Factory, ArrowRight } from 'lucide-react';

const SolutionCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:shadow-xl">
    <div className="text-green-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a href="#" className="inline-flex items-center text-green-500 hover:text-green-600">
      了解更多 <ArrowRight className="ml-1 h-4 w-4" />
    </a>
  </div>
);

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">解决方案</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SolutionCard
            title="住宅解决方案"
            description="为家庭提供清洁能源，降低电费支出，实现能源独立。包括屋顶光伏系统和家用储能设备。"
            icon={<Home className="h-12 w-12" />}
          />
          <SolutionCard
            title="商业解决方案"
            description="为商业建筑提供定制化能源方案，优化能源使用，降低运营成本。包括大型光伏系统和智能能源管理。"
            icon={<Building2 className="h-12 w-12" />}
          />
          <SolutionCard
            title="工业解决方案"
            description="为工厂和大型设施提供全面的能源解决方案，提高能源效率，减少碳排放。包括工业级光伏系统和大规模储能。"
            icon={<Factory className="h-12 w-12" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Solutions;