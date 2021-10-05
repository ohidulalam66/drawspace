import React from 'react';
import './ContactUs.css';

const ContactUs = () => {

    // ContactUs rendering
    return (
        <div className="bg-contact">
            <div className="container py-5">
                <h3 className="fw-bold text-decoration-underline text-secondary">Contact Us</h3>
                <div className="row d-flex justify-content-around align-items-center g-4">
                    <div className="col-md-6">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Name</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Full Name" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">User Name</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your User Name " />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your email" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Comment</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="./images/contact-us.jpg" className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

/*

*/