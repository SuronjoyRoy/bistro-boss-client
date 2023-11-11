import React from 'react';
import chef from '../../../assets/home/chef-service.jpg'
const SimpleInfo = () => {
    return (
        <div className="hero"  style={{ backgroundImage: 'url(https://i.ibb.co/0fCbnPd/chef-service.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content md:mx-20 lg:mx-20">
                <div className=" text-black bg-slate-200 p-2 md:p-14 lg:p-14">
                    <h1 className="mb-5 text-4xl font-medium ">Bistro Boss</h1>
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default SimpleInfo;