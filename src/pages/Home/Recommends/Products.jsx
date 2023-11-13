
const Products = ({product}) => {
    const {name, recipe, image} = product;
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img className="w-full" src={image}/></figure>
            <div className="card-body">
                <h2 className="card-title justify-center text-center">{name}</h2>
                <p className="text-center">{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn border-0 border-b-4 btn-outline uppercase">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Products;