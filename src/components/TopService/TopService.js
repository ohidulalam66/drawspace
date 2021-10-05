import React from 'react';
import './TopService.css';

const TopService = props => {

    // data destrucring
    const { image, name, description, Instructor } = props.topService;
    return (
        <>
            <div className="col">
                <div className="card p-3 h-100 service-card">
                    <img src={image} className="card-img-top rounded-3 img-fluid topService-img mx-auto" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <p className="">By <span className="text-decoration-underline fw-bold text-danger instructor">{Instructor}</span></p>
                        <p className="card-text fw-bold">Description: <span className="fw-light">{description}</span></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopService;