import SectionTitle from '../../../Components/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter(item => item.category === 'popular');
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch('menu.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       const popularItems = data.filter(item => item.category === 'popular');
  //       setMenu(popularItems);
  //     });
  // }, []);
  return (
    <section className="my-16">
      <SectionTitle
        subHeading={'Popular Items'}
        heading={'From Our Menu'}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popularItems.map(item => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
