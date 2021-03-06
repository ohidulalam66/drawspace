import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    // services use sate hooks
    const [services, setServices] = useState([]);

    // services use effect hooks
    useEffect(() => {
        const url = "./courses.JSON";
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // services rendering
    return (
        <>
            <div className="bg-services">
                <div className="text-center">
                    <h2 className="fw-bold pt-3 heading">Our Services</h2>
                    <p className="text-danger paragraph">500+ lessons organized by topic!!!</p>
                    <hr />
                </div>
                {
                    services.map(service =>
                        <Service
                            key={service.price}
                            service={service}
                        ></Service>)
                }
            </div>
        </>
    );
};

export default Services;