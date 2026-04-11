import React from 'react';
import HeroImage from '../../assets/images/pngwing 1.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[70vh] w-11/12 mx-auto my-12 rounded-2xl">
            <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between py-8">
                <img
                    src={HeroImage}
                    className="w-80 md:w-96 rounded-lg transition-all md:hover:scale-105 duration-500"
                />
                <div className='mt-4 md:mt-0'>
                    <h2 className="text-3xl md:text-5xl font-bold">Books to freshen up <br /> your bookshelf</h2>

                    <button className="btn bg-[#03C755] text-white border-[#00b544] mt-5 md:mt-8 transition-all md:hover:scale-105 duration-500">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;