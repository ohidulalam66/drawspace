import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="bg-dark">
                <img className="img-fluid mx-auto d-block footer-img" src="./footer-img.png" alt="" />
                <div className="mx-auto text-center social-icon">
                    <a href="/facebook"><i className="fab fa-facebook-square icon"></i></a>
                    <a href="/twitter"><i className="fab fa-twitter icon"></i></a>
                    <a href="/youtube"><i className="fab fa-youtube icon"></i></a>
                    <h6 className="text-center text-white pb-4">©2021 Drawspace. All rights reserved.</h6>
                </div>
            </div>
        </>
    );
};

export default Footer;