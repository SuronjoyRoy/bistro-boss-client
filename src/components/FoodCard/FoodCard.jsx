
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, recipe, image, price, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const loacation = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch]= useCart();

    const handleAddtoCard = food => {
        if (user && user.email) {
            // TODO:send cart item to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // refetch cart to update the cart items count
                    refetch();
                }
            })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please log in add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, logged in!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   send to the login page
                    navigate('/login', { state: { from: loacation } })
                }
            });
        }
    }
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img className="w-full" src={image} /></figure>
            <p className='absolute right-0 px-4 mt-4 mr-4 bg-slate-900 text-white'>${price}</p>
            <div className="card-body">
                <h2 className="card-title justify-center text-center">{name}</h2>
                <p className="text-center">{recipe}</p>
                <div className="card-actions justify-center">
                    <button
                        onClick={() => handleAddtoCard(item)}
                        className="btn border-0  border-orange-400 border-b-4 btn-outline uppercase">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;