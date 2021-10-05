import React from 'react';
import './Service.css';

const Service = props => {

    // data distructuring
    const { name, image, types, Instructor, rating, price } = props.service;
    return (
        // Service rendering
        <>
            <div className="container">
                <div class="row row-cols-1 row-cols-md-1">
                    <div className="d-flex my-3 w-100 p-3 service">
                        <img src={image} className="service-img" alt="..." />
                        <div className="mx-5">
                            <h2>{name}</h2>
                            <p className="fw-bold fs-5">{types}</p>
                            <p className="fs-5">By <span className="text-decoration-underline fw-bold text-danger instructor">{Instructor}</span></p>
                            <p>Rating: {rating}</p>
                            <button className="purchase-btn">Purchase</button>
                        </div>
                        <h3 className="ms-auto d-flex align-items-center">${price}</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;