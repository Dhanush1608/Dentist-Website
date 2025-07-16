import React from 'react';

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="container">
                <div className="row min-vh-100 align-items-center">
                    <div className="content text-center text-md-left">
                        <h3>Let us brighten your smile</h3>
                        <p>
                            Proper oral care habits, including regular brushing and flossing, promote a healthy, radiant smile.
                        </p>
                        <a href="#contact" className="link-btn">make appointment</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;