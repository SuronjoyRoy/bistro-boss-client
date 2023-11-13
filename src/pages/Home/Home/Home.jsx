import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';
import PopularMenu from '../PopularMenu/PopularMenu';
import Recommends from '../Recommends/Recommends';
import Phone from '../Simple/Phone';
import SimpleInfo from '../Simple/SimpleInfo';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <SimpleInfo></SimpleInfo>
            <PopularMenu></PopularMenu>
            <Phone></Phone>
            <Recommends></Recommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;