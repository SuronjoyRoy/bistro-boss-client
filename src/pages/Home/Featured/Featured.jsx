import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import feauredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white py-10">
            <SectionTitle
                subHeading={'---Check it out---'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center py-10 lg:px-36 bg-slate-500 bg-opacity-60">
                <div>
                    <img src={feauredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>March 20, 2023</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn border-0 border-b-4 btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;