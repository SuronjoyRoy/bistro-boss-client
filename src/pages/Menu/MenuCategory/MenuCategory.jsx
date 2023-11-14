import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import {Link} from "react-router-dom"

const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="my-8 text-center">
                <Link to={`/order/${title}`}>
                    <button className="btn border-0 border-b-4 btn-outline">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>

        </div>
    );
};

export default MenuCategory;