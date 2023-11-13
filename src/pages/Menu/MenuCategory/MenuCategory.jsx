import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div>
            {title && <Cover img={coverImg} title={title}></Cover>}
             <div className="grid md:grid-cols-2 gap-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="my-8 text-center">
            <button className="btn border-0 border-b-4 btn-outline">ORDER YOUR FAVOURITE FOOD</button>
            </div>
            
        </div>
    );
};

export default MenuCategory;