import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <div id="top-banner">
            <h1 className="fs-1 text-capitalize">best food waiting for your belly</h1>
            <div className="" id="search-container">
                <input class="" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
                <button>Search Food</button>
            </div>
        </div>
    );
};

export default Banner;