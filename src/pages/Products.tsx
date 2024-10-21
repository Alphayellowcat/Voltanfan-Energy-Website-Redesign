import React from 'react';
import { Battery, Zap, Sun, ArrowRight, Box, Briefcase } from 'lucide-react';

const ProductCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:shadow-xl">
    <div className="text-blue-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a href="#" className="inline-flex items-center text-blue-500 hover:text-blue-600">
      了解更多 <ArrowRight className="ml-1 h-4 w-4" />
    </a>
  </div>
);

const DetailedProductCard: React.FC<{ title: string; description: string; specs: string[]; icon: React.ReactNode }> = ({ title, description, specs, icon }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:shadow-xl">
    <div className="text-blue-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <h4 className="font-semibold mb-2">主要规格：</h4>
    <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
      {specs.map((spec, index) => (
        <li key={index}>{spec}</li>
      ))}
    </ul>
    <a href="#" className="inline-flex items-center text-blue-500 hover:text-blue-600">
      查看完整规格 <ArrowRight className="ml-1 h-4 w-4" />
    </a>
  </div>
);

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">我们的产品</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            title="高效逆变器"
            description="我们的逆变器采用先进技术，确保最高效率的能源转换，适用于各种规模的光伏系统。"
            icon={<Zap className="h-12 w-12" />}
          />
          <ProductCard
            title="智能储能系统"
            description="先进的储能解决方案，帮助您存储多余电力，实现能源使用的最优化。"
            icon={<Battery className="h-12 w-12" />}
          />
          <ProductCard
            title="光伏组件"
            description="高性能光伏组件，采用最新技术，提供卓越的发电效率和长期可靠性。"
            icon={<Sun className="h-12 w-12" />}
          />
          <DetailedProductCard
            title="1.5MW/3MWh AC+DC BESS Container"
            description="提供适用于微电网并网和离网场景的公用事业级AC+DC一体化集装箱解决方案，也适用于大规模公用事业应用。"
            specs={[
              "系统型号：VF1500-3000-USCA-690",
              "直流侧电池容量：3008kWh",
              "额定容量：1504KVA",
              "交流额定电压：AC 690V",
              "工作温度：-20℃ - 50℃",
            ]}
            icon={<Box className="h-12 w-12" />}
          />
          <DetailedProductCard
            title="135kW/282kWh AC+DC BESS Cabinet"
            description="适用于小型至中型商业和工业应用的移动式储能解决方案，集成PCS和电池，可优化太阳能和柴油发电，适用于峰值削减和时段用电场景。"
            specs={[
              "型号：VF135-282-USCA-480",
              "尺寸：1350mm x 2400mm x 1350mm",
              "交流额定功率：135kW",
              "电池能量：282 kWh",
              "工作温度：-40℃至+50℃",
            ]}
            icon={<Briefcase className="h-12 w-12" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Products;