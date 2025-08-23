import Image from 'next/image';

const FlavorCard = ({ imgSrc, label, text }) => {
  return (
    <div className="p-6 bg-zinc-800 border border-zinc-700 rounded-2xl shadow-lg hover:scale-105 hover:border-emerald-400 transition-all duration-300 ease-in-out">
      <div className="flex flex-col items-center">
        <Image src={imgSrc} width={300} height={300} alt={label} />
      </div>
      <h3 className="text-xl font-semibold">{label}</h3>
      <p className="font-medium text-zinc-400">{text}</p>
    </div>
  );
};

export default FlavorCard;
