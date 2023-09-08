const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-4">
      <img
        className="w-[118px] h-[104px] rounded-r-[200px] rounded-b-[200px] "
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase">{name} -----</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-400">${price}</p>
    </div>
  );
};

export default MenuItem;
