import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import Products from "./Products";

const Recommends = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className="py-10">
            <SectionTitle
                subHeading={'---Should Try---'}
                heading={'CHEF RECOMMENDS'}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    products.slice(0, 3).map(product =>
                        <Products
                            key={product._id}
                            product={product}
                        ></Products>)
                }
            </div>
        </div>
    );
};

export default Recommends;