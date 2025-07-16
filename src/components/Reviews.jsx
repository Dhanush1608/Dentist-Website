import React from 'react';

const Reviews = () => {
    // Data for client reviews
    const clientReviews = [
        {
            imgSrc: "/Images/pradeep.jpg", // Path to image in public folder
            name: "Pradeep",
            review: "I'm thrilled with the results of my dental treatment! The staff were friendly and professional, and I felt at ease throughout the process."
        },
        {
            imgSrc: "/Images/dhanush.jpg", // Path to image in public folder
            name: "Dhanush",
            review: "I was impressed by the modern facilities and the dentist's expertise. My teeth have never looked better."
        },
        {
            imgSrc: "/Images/praveen.jpg", // Path to image in public folder
            name: "Praveen",
            review: "The dentist took the time to explain everything and made me feel comfortable throughout the procedure. I highly recommend this practice."
        }
    ];

    return (
        <section className="reviews" id="reviews">
            <h1 className="heading">Satisfied Clients</h1>
            <div className="box-container container">
                {/* Map over the clientReviews array */}
                {clientReviews.map((client, index) => (
                    <div className="box" key={index}>
                        <img src={client.imgSrc} alt={client.name} style={{ width: '100px', height: '100px' }} />
                        <p>{client.review}</p>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <h3>{client.name}</h3>
                        <span>Satisfied Client</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;