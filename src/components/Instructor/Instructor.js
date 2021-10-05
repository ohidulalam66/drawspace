import React from 'react';
import './Instructor.css';

const Instructor = props => {
    // data distructuring
    const { image, name, videos, profession, address } = props.instructor;

    return (
        // Instructor UI rendering
        <>
            <div className="col-md-6 g-4">
                <div className="card text-dark bg-secondary h-100 service">
                    <b className="card-header">{name}</b>
                    <img src={image} className="instructor-image m-2 mx-auto" alt="" />
                    <div className="m-2">
                        <p><i class="fas fa-video"></i> <b>Videos:</b> {videos}</p>
                        <p><i class="fas fa-user-tie"></i> <b>profession:</b> {profession}</p>
                        <p><i class="far fa-address-card"></i> <b>Address:</b> {address}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Instructor;