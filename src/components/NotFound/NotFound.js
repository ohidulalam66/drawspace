import React from 'react';
import './NotFound.css';

const NotFound = () => {

    // Notfound rendering
    return (
        <div>
            <h1 className="erorr-heading">Page Not Found</h1>
            <img src="./images/notfound.png" className="erorr-img" alt="" />
        </div>
    );
};

export default NotFound;