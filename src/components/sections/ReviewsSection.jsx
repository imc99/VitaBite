import Button from '../reusable/Button';
import Review from '../Review';

const reviewItems = [
  {
    imgSrc: '/face1.jpg',
    text: "I love that it's natural and still tastes amazing. Berry Bliss is my go-to snack at the office.",
    name: 'Daniel R.',
  },
  {
    imgSrc: '/face2.jpg',
    text: "Finally a protein bar that doesn't taste like cardboard. VitaBite keeps me energized during workouts!",
    name: 'Sarah M.',
  },
  {
    imgSrc: '/face3.jpg',
    text: 'Peanut Power gives me the perfect boost before training. Tasty, filling, and super convenient.',
    name: 'Emily K.',
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-30 px-4 sm:px-8 w-full" id="reviews">
      <div className="flex justify-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">
          What Our Customers Say
        </h2>
      </div>
      <div className="container-md">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
          {reviewItems.map((item, index) => (
            <Review
              key={index}
              imgSrc={item.imgSrc}
              text={item.text}
              name={item.name}
            />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button href="/" variant="secondary">
            Leave a review
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
