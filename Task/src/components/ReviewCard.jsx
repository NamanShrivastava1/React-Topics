const ReviewCard = ({ name, date, review, rating }) => {
  return (
    <div className="w-97.5 h-36.25 border border-gray-200 rounded-xl bg-white p-5">
      <div className="flex justify-between items-center">
        <h3 className="text-[14px] font-semibold text-gray-900">{name}</h3>

        <p className="text-[12px] text-gray-500">{date}</p>
      </div>

      <div className="mt-3 text-orange-600 text-[13px] tracking-[1px]">
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </div>

      <p className="mt-3 text-[13px] leading-5 text-gray-600">{review}</p>
    </div>
  );
};

export default ReviewCard;
