import Image from 'next/image';
import Button from '../reusable/Button';

const HeroSection = () => {
  return (
    <section className="py-50 px-4 sm:px-8 w-full h-dvh">
      <div className="h-full w-full flex flex-col-reverse sm:flex-row justify-center items-center container-md">
        {/* Left/Bottom */}
        <div className="w-full sm:w-1/2 space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-center sm:text-left">
            Fuel Your Day with <span className="text-emerald-500">Natural</span>{' '}
            <span className="text-amber-400">Energy.</span>
          </h1>
          <p className="w-full lg:max-w-[70%] font-medium text-center sm:text-left text-zinc-400">
            VitaBite is the protein bar made with 100% natural ingredients — no
            sugar, no nonsense, just pure energy.
          </p>
          <div className="flex justify-center sm:justify-start items-center space-x-4 mt-3">
            <Button href="/" variant="primary">
              Buy Now
            </Button>
            <Button href="/" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>
        {/* Right/Top */}
        <div className="max-w-[400px] w-full min-h-[400px] sm:w-1/2 relative flex justify-center items-center">
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-40 h-40 bg-emerald-500/40 blur-3xl z-0"></div>
          <Image
            src="/bar.png"
            fill
            priority
            sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           400px"
            alt="Protein Bar"
            className="object-contain z-1"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
