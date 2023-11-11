import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';
import PopularMenu from '../PopularMenu/PopularMenu';
import SimpleInfo from '../Simple/SimpleInfo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <SimpleInfo></SimpleInfo>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;