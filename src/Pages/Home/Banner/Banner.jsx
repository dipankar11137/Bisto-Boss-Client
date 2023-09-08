import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
  return (
    <Carousel autoPlay on>
      <div>
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" />
      </div>
      <div>
        <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" />
      </div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_640.jpg" />
      </div>
    </Carousel>
  );
};

export default Banner;
