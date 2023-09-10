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

  const coverImg =
    'https://ik.imagekit.io/awwybhhmo/satellite_images/pizza/beyondmenu/about_us/9.jpg?tr=w-3840';
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Cover img={coverImg} title={'our Menu'}></Cover>
      {/* Main cover */}
      <SectionTitle heading="Todays offer"></SectionTitle>
      {/* offer menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert menu items */}
      <MenuCategory
        items={dessert}
        title={'dessert'}
        img={coverImg}
      ></MenuCategory>
      <MenuCategory items={pizza} title={'pizza'} img={coverImg} />
      <MenuCategory items={soup} title={'soup'} img={coverImg} />
      <MenuCategory items={salad} title={'salad'} img={coverImg} />
    </div>
  );
};

export default Menu;
