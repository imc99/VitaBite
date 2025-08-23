import BenefitCard from '../BenefitCard';

const benefits = [
  {
    icon: 'spa',
    label: '100% Natural',
    text: 'Made with plant-based proteins, organic fruits and nuts.',
  },
  {
    icon: 'bolt',
    label: 'Boosts Energy',
    text: 'Balanced nutrition designed to keep you active all day.',
  },
  {
    icon: 'fit',
    label: 'High in Protein',
    text: 'Packed with 15g of protein to fuel muscles and recovery.',
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-30 px-4 sm:px-8 w-full min-h-[600px]" id="benefits">
      <div className="container-md">
        <div className="flex justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">
            Why choose <span className="text-emerald-500">Vita</span>
            <span className="text-amber-400">Bite?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
          {benefits.map((item, index) => (
            <BenefitCard
              key={index}
              icon={item.icon}
              label={item.label}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
