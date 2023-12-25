// ReviewItem.tsx

import Image from "next/image";

interface ReviewItemProps {
  review: {
    name: string;
    date: string;
    content: string;
    rating: number;
  };
}

const ReviewItem: React.FC<ReviewItemProps> = ({ review }) => (
  <div className="pt-2">
    <div className="flex gap-3 mb-2">
      <Image src="/Ellipse 4.png" alt="" width={50} height={50} />
      <span>
        <h2 className="font-bold">{review.name}</h2>
        <span>{review.date}</span>
      </span>
    </div>
    <p>{review.content}</p>
    <span className="flex gap-1 mt-2">
      <Image
        src="/material-symbols_star.png"
        alt=""
        width={20}
        height={20}
        className="object-contain"
      />
      {review.rating} rating
    </span>
  </div>
);

export default ReviewItem;
