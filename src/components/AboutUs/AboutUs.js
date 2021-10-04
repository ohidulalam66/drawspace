import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="bg-about">
            <div className="container">
                <div className="row about-container p-2">
                    <div className="col-md-6 left-container">
                        <img className="img-fluid" src="./images/about-img.jpg" alt="" />
                    </div>
                    <div className="col-md-6 right-container">
                        <h3 className="fw-bold text-decoration-underline text-secondary">About Us</h3>
                        <p className="text-dark">
                            Our English and Art Course combines our highly popular General English Course with an exciting and creative course covering theoretical and practical approaches to art.This programme is on 3 afternoons in the week and is made up of lectures and educational visits as well as your practical work. You will be encouraged to explore your creative potential by developing a range of painting and mixed media skills in response to various ideas and subject matter.It is designed to stimulate your appreciation of the arts while providing a valuable opportunity to practise your English language skills with like-minded students and tutors.As well as developing your personal and theoretical responses to the arts, you will explore a variety of themes and be introduced to a range of processes, styles and techniques. sketchbooks, photography and screen printing.
                        </p>
                    </div>
                </div>
                <div className="row about-container p-2">
                    <div className="col-md-6 left-container">
                        <img className="img-fluid" src="./images/our-facilities.jpg" alt="" />
                    </div>
                    <div className="col-md-6 right-container">
                        <h3 className="fw-bold text-decoration-underline text-secondary">Our Facilities</h3>
                        <p className="text-dark">
                            <h4 className="text-danger">What does this course lead to?</h4>
                            The course is designed to nurture your unique approach and help you grow into a professional artist, film-maker, photographer or performance artist, but also provides support in developing a wide range of exciting career paths: art critic, art journalist, writer or poet, theorist, lecturer, school teacher or art therapist.
                            <h4 className="text-danger">Who is this course for?</h4>
                            The fine art programme at Solent is ideally suited to students who are interested in refining their artistic skills and familiarising themselves with theoretical frameworks in art. Applicants should demonstrate a basic level of skill set in art, and some level of contextual understanding of art practice.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;