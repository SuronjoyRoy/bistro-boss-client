import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const pizza = menu.filter(item => item.category === "pizza");
    const salads = menu.filter(item => item.category === "salads");
    const offered = menu.filter(item => item.category === "offered");
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title={"Our Menu"}></Cover>
            {/* offered menu items */}
            <SectionTitle
                subHeading='---Dont miss---'
                heading='TODAYS OFFER'
            ></SectionTitle>
            {/* dessert menu items */}
            <MenuCategory 
            items={offered} 
            title='DESSERTS'
            img={dessertImg}
            ></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory 
            items={pizza} 
            title='PIZZA'
            img={pizzaImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;