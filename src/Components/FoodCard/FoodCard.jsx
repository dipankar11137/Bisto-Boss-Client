const FoodCard = ({ item }) => {
  const { name, image, price } = item;
  return (
    <div className="card w-96 bg-white shadow-2xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className="absolute right-0 top-5 mr-4 bg-slate-900 text-white bg-opacity-70 p-2 rounded-lg">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 border-orange-500 bg-slate-100 border-b-4">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
