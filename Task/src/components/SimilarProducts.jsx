const SimilarProductCard = ({ name, price, bgColor }) => {
  return (
    <div className="w-62.5 h-53.75 rounded-xl overflow-hidden border border-gray-200 bg-white">
      <div
        className={`h-36.25 flex items-center justify-center ${bgColor}`}
      ></div>

      <div className="h-17.5 px-4 py-3">
        <h3 className="text-[14px] font-medium text-gray-900">{name}</h3>

        <p className="text-[17px] font-bold text-gray-900 mt-1">{price}</p>
      </div>
    </div>
  );
};

export default SimilarProductCard;
