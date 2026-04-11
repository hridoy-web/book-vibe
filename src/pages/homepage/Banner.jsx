import React from 'react';
import HeroImage from '../../assets/images/pngwing 1.png'

const Banner = () => {
    return (
        <div>

            <div className="hero bg-base-300 min-h-[70vh] w-11/12 mx-auto my-10 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
                    <img
                        src={HeroImage}
                        className="max-w-sm rounded-lg "
                    />
                    <div>
                        <h2 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h2>

                        <button className="btn bg-[#03C755] text-white border-[#00b544] mt-6 ">View The List</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;