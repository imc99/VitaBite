import FlavorCard from '../FlavorCard';
import Button from '../reusable/Button';

const flavorItems = [
  {
    imgSrc: '/cocoa.png',
    label: 'Cocoa Crunch',
    text: 'Rich cocoa with a nutty twist.',
  },
  {
    imgSrc: '/bliss.png',
    label: 'Berry Bliss',
    text: 'A refreshing mix of juicy berries with a hint of sweetness.',
  },
  {
    imgSrc: '/peanut.png',
    label: 'Peanut Power',
    text: 'Classic roasted peanuts packed with energy and crunch.',
  },
];

const FlavorsSection = () => {
  return (
    <section className="py-30 px-4 sm:px-8 w-full" id="flavors">
      <div className="flex justify-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">
          Flavors
        </h2>
      </div>
      <div className="container-md">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {flavorItems.map((item, index) => (
            <FlavorCard
              key={index}
              imgSrc={item.imgSrc}
              label={item.label}
              text={item.text}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <Button href="/" variant="primary">
          Shop Now
        </Button>
      </div>
    </section>
  );
};

export default FlavorsSection;
