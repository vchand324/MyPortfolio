import React from 'react';
import {Fade} from 'react-reveal';

const Quote = () => {
    return (
        <div className="quote-div">
            <div className="head mx-5">
                <div className="main-div">
                <Fade top cascade>
                    <section className="div-1 quote">
                        <p className="my-3">“ No rainstrom lasted forever. ”</p>
                        
                    </section>
                </Fade>
                </div>
            </div>
        </div>
    )
}

export default Quote;
