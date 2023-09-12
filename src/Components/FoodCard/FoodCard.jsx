import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const FoodCard = ({ item }) => {
  const { name, image, price, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = () => {
    if (user || user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(cartItem),
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            Swal.fire('Add To Cart !', 'You clicked the button!', 'success');
          }
        });
    } else {
      Swal.fire({
        title: 'Please login to order food',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now',
      }).then(result => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };
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
          <button
            onClick={handleAddToCart}
            className="btn btn-outline border-0 border-orange-500 bg-slate-100 border-b-4"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
