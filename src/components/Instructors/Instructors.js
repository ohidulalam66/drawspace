import React, { useEffect, useState } from 'react';
import Instructor from '../Instructor/Instructor';
import './Instructors.css';

const Instructors = () => {

    // Instructors use state hooks
    const [instructors, setInstructors] = useState([]);

    // Instructors use effect hooks
    useEffect(() => {
        const url = "./instructors.JSON";
        fetch(url)
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    // Instructors rendering
    return (
        <div className="bg-services pb-4">
            <h1 className="fw-bold text-center pt-3 heading">Our Instructors</h1>
            <p className="text-center text-danger paragraph">Artful, get inspired to create</p>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 instructors-left">
                        <div className="row">
                            {
                                instructors.map(instructor =>
                                    <Instructor
                                        key={instructor.name}
                                        instructor={instructor}
                                    ></Instructor>)
                            }
                        </div>
                    </div>
                    <div className="col-md-6 pt-4 instructors-right">
                        <h4 className="text-decoration-underline">Matt Fussell</h4>
                        <p>Even though I’m usually not conscious of it, I think drawing has always served a sort of therapeutic purpose in my life. There’s something about the process of translating the messy chaos of real life into a clean, simple drawing that’s always been comforting to me. – <span className="text-success">Matt Fussell</span></p>
                        <h4 className="text-decoration-underline">Marcello Barenghi</h4>
                        <p>Drawing is rather like playing chess: your mind races ahead of the moves that you eventually make. – <span className="text-success">Marcello Barenghi</span></p>
                        <h4 className="text-decoration-underline">Josiah Alan Brooks(Jazza)</h4>
                        <p>It is only by drawing often, drawing everything, drawing incessantly, that one fine day you discover to your surprise that you have rendered something in its true character. – <span className="text-success">Josiah Alan Brooks(Jazza)</span></p>
                        <h4 className="text-decoration-underline">Igor Lukyanov</h4>
                        <p>For the artist, drawing is discovery. And that is not just a slick phrase; it is quite literally true.Drawing is a way of coming upon the connection between things, just like metaphor in poetry reconnects what has become separated. – <span className="text-success">Igor Lukyanov</span></p>
                        <h4 className="text-decoration-underline">Cahnia cangah</h4>
                        <p>The whole essence of good drawing and of good thinking, perhaps – is to work a subject down to the simplest form possible and still have it believable for what it is meant to be.Drawing is giving a performance; an artist is an actor who is not limited by the body, only by his ability and, perhaps, experience.– Marc Davis<span className="text-success">Cahnia cangah</span></p>
                        <h4 className="text-decoration-underline">Devon Rodriguez</h4>
                        <p>With drawing, I am acutely aware of creating something on a sheet of paper. It is a sensual act, which you cannot say about the act of writing. In fact, I often turn to drawing to recover from the writing. – <span className="text-success">Devon Rodriguez</span></p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Instructors;