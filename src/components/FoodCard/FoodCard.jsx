import React from 'react';

const FoodCard = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img className="w-full" src={image}/></figure>
            <p className='absolute right-0 px-4 mt-4 mr-4 bg-slate-900 text-white'>${price}</p>
            <div className="card-body">
                <h2 className="card-title justify-center text-center">{name}</h2>
                <p className="text-center">{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn border-0  border-orange-400 border-b-4 btn-outline uppercase">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;