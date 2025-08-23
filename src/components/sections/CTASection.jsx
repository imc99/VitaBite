import Button from '../reusable/Button';

const CTASection = () => {
  return (
    <section className="py-30 px-4 sm:px-8 w-full bg-zinc-950">
      <div className="flex flex-col justify-center items-center min-h-[400px] space-y-4 sm:space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Ready to <span className="text-emerald-500">Bite</span> into{' '}
          <span className="text-amber-400">Energy?</span>
        </h1>
        <p className="font-medium text-zinc-400 text-center">
          Order your VitaBite box today and feel the difference.
        </p>
        <Button href="/" variant="primary">
          Buy Now
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
