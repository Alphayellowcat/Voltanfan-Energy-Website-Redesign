import React from 'react';
import { Factory, UtensilsCrossed, Building } from 'lucide-react';

const CaseStudyCard: React.FC<{ title: string; description: string; icon: React.ReactNode; image: string }> = ({ title, description, icon, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className="text-blue-500 mr-2">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">客户成功案例</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CaseStudyCard
            title="工厂能源优化"
            description="为一家大型制造工厂安装了光伏系统和智能储能设备，帮助其减少30%的能源成本，并显著降低碳排放。"
            icon={<Factory className="h-6 w-6" />}
            image="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
          <CaseStudyCard
            title="餐厅绿色能源改造"
            description="为一家连锁餐厅实施了屋顶光伏系统，不仅满足了日常用电需求，还通过余电上网获得了额外收益。"
            icon={<UtensilsCrossed className="h-6 w-6" />}
            image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
          <CaseStudyCard
            title="医院备用电源系统"
            description="为一家大型医院设计并安装了光伏+储能系统，提供可靠的备用电源，确保关键设备在紧急情况下持续运行。"
            icon={<Building className="h-6 w-6" />}
            image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;