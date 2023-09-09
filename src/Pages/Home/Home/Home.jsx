import Banner from "../Banner/banner";
import Category from "../Category/Category";
import Featured from '../Featured/Featured';
import PopularMenu from '../PopularMenu/PopularMenu';

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
    </div>
  );
};

export default Home;