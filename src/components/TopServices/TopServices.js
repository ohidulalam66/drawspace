import React, { useEffect, useState } from 'react';
import TopService from '../TopService/TopService';
import './TopServices.css';

const TopServices = () => {
    // top services use sate hooks
    const [topServices, setTopServices] = useState([]);

    // top services use effect hooks
    useEffect(() => {
        const url = "./topCourses.JSON";
        fetch(url)
            .then(res => res.json())
            .then(data => setTopServices(data))
    }, [])
    // top services ui rendering 
    return (
        <>
            <h3 className="fw-bold text-center pt-3 heading">Top Services</h3>
            <div className="row row-cols-1 row-cols-md-2 w-100 py-4 mx-auto g-4 ">
                {
                    topServices.map(topService =>
                        <TopService
                            key={topService.price}
                            topService={topService}
                        ></TopService>)
                }
            </div>
        </>
    );
};

export default TopServices;