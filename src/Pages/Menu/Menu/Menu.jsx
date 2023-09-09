import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Components/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import Cover from '../../Shared/Cover/Cover';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const offered = menu.filter(item => item.category === 'offered');
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Cover
        img={
          'https://ik.imagekit.io/awwybhhmo/satellite_images/pizza/beyondmenu/about_us/9.jpg?tr=w-3840'
        }
        title={'Our Menu'}
      ></Cover>
      <SectionTitle heading="Todays offer"></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* <PopularMenu /> */}
    </div>
  );
};

export default Menu;
