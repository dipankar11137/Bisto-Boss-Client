import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './OrderTabStyle.css';

// import required modules
import { Pagination } from 'swiper/modules';
import FoodCard from '../../../Components/FoodCard/FoodCard';

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {' '}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {items.slice(0, 6).map(item => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {items.slice(6, 12).map(item => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {items.slice(12, 18).map(item => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderTab;
