import ".//Brand.css"
import rectangleImage from './carts/Rectangle.png';


import React from 'react';

const Brand = () => {
    return (

        <div className="box">
            <div className="nox">
                <h1 className="nox-h">наши бренды</h1>
                            <img className="imd-b" src={rectangleImage} alt="Rectangle" />

            </div>
        </div>
    );
}

export default Brand;
