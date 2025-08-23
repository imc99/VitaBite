import Image from 'next/image';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';

const Review = ({ imgSrc, text, name }) => {
  return (
    <div className="p-6 bg-zinc-800 border border-zinc-700 rounded hover:scale-105 hover:border-amber-400 transition-all duration-300 ease-in-out relative">
      <div className="absolute right-5 top-5">
        <FormatQuoteIcon fontSize="large" className="text-zinc-400/40" />
      </div>
      <div className="w-15 h-15 rounded-full ring-2 ring-amber-400 relative">
        <Image
          src={imgSrc}
          fill
          sizes="60px"
          alt={`${name} Profile Picture`}
          className="rounded-full"
        />
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex justify-center items-center space-x-1 mt-8">
          <StarIcon className="text-amber-400" />
          <StarIcon className="text-amber-400" />
          <StarIcon className="text-amber-400" />
          <StarIcon className="text-amber-400" />
          <StarIcon className="text-amber-400" />
        </div>
        <p className="italic text-center">{text}</p>
        <p className="font-medium text-amber-400 text-center">{name}</p>
      </div>
    </div>
  );
};

export default Review;
