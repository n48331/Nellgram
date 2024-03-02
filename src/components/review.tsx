import { FunctionComponent } from "react";

interface ReviewCardProps {
  name: string;
  rating: number;
  date: string;
}

const ReviewCard: FunctionComponent<ReviewCardProps> = ({ name, rating, date }) => {
  return (
    <div className="py-4 rounded-lg border-dashed border-2 border-spacing-4 max-w-[355px] max-h-[120px] border-black bg-white">
      {/* <div className="border-l-8 border-theme-color">
        <p className="max-h-[36px] max-w-[334px] truncate">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At sapiente
          consequuntur consequatur modi corporis, obcaecati{" "}
        </p>
      </div> */}
      <div className="flex gap-2 items-center justify-center p-2">
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
        <div className="flex flex-col text-xs gap-1 justify-center">
          <div>
            <p>{name}</p>
          </div>
          <div>
            <span>{date}</span>
          </div>
        </div>
        <StarRating rating={rating} />
      </div>
    </div>
  );
};


const StarRating = ({ rating }: any) => {
  const maxStars = 5;

  return (
    <div className="flex ml-auto">
      {[...Array(maxStars)].map((_, index) => (
        <div key={index}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={index < rating ? '#FFE234' : 'none'}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default ReviewCard;
