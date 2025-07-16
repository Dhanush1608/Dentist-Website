import React from 'react';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 image">
                        <img
                            src="https://img.freepik.com/free-photo/close-up-smiley-patient-appointment_23-2149164306.jpg?ga=GA1.1.1198942412.1726855212&semt=ais_hybrid"
                            className="w-100 mb-5 mb-md-0"
                            alt="Smiling patient at appointment"
                        />
                    </div>
                    <div className="col-md-6 content">
                        <span>about us</span>
                        <h3>True Healthcare For Your Family</h3>
                        <p>At our dental practice, we prioritize comprehensive care for your entire family, providing personalized treatment plans that address unique oral health needs, from routine cleanings and fillings to advanced restorative and cosmetic procedures, ensuring a lifetime of healthy, confident smiles.</p>
                        <a href="#contact" className="link-btn">make appointment</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;