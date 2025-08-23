import SpaIcon from '@mui/icons-material/Spa';
import BoltIcon from '@mui/icons-material/Bolt';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const iconVariants = {
  spa: <SpaIcon className="text-emerald-500" />,
  bolt: <BoltIcon className="text-amber-400" />,
  fit: <FitnessCenterIcon className="text-emerald-500" />,
};

const BenefitCard = ({ icon, label, text }) => {
  return (
    <div className="p-6 bg-zinc-800 border border-zinc-700 rounded-2xl shadow-lg hover:scale-105 hover:border-amber-400 transition-all duration-300 ease-in-out">
      <div className="w-8 h-8 rounded-full bg-zinc-700 flex justify-center items-center mb-4">
        {iconVariants[icon]}
      </div>
      <h2 className="text-xl font-semibold">{label}</h2>
      <p className="font-medium text-zinc-400">{text}</p>
    </div>
  );
};

export default BenefitCard;
