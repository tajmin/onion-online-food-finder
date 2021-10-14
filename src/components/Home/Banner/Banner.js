import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <div className="d-flex align-items-center" id="top-banner">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10 pb-4">
                        <h1 className="display-4 fw-bold text-capitalize">best food waiting for your belly</h1>
                    </div>
                    <div className="col-10 col-md-8 col-lg-6 p-0" id="search-container">
                        <input type="text" placeholder="search for food" />
                        <button>Search</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;