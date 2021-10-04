import React from 'react';
import TopServices from '../TopServices/TopServices';
import './Home.css';

const Home = () => {
    return (
        <div className="bg-home">
            <div className="container">
                <div className="row d-flex justify-content-center p-4">
                    <div className="col-md-6 left-container">
                        <h6>Everyone can draw.</h6>
                        <p>Our online drawing lessons with printable curriculum can show you how.</p>
                        <button className="purchase-btn"><span>Purchase All Courses</span></button>
                    </div>
                    <div className="col-md-6 right-container">
                        <img className="img-fluid" src="./images/poster.png" alt="" />
                    </div>
                </div>
                <hr />
                <TopServices />
            </div>
        </div>
    );
};

export default Home;