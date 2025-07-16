import React from 'react';

const Services = () => {
    // Data for services to make the component cleaner and more maintainable
    const serviceData = [
        {
            imgSrc: "https://cdn-icons-png.freepik.com/256/2400/2400864.png?ga=GA1.1.1198942412.1726855212&semt=ais_hybrid",
            title: "Alignment Specialist",
            description: "Our expert alignment specialist is dedicated to helping you achieve a perfectly aligned smile, utilizing advanced orthodontic techniques and cutting-edge technology to diagnose and treat misalignments, ensuring a more confident and healthy you."
        },
        {
            imgSrc: "https://cdn-icons-png.freepik.com/256/15538/15538498.png?ga=GA1.1.1198942412.1726855212&semt=ais_hybrid",
            title: "Cosmetic Dentistry",
            description: "Transform your smile with our expert cosmetic dentistry services, featuring a range of innovative treatments designed to enhance the aesthetic appeal of your teeth, from teeth whitening and bonding to veneers and crowns, our goal is to help you achieve a radiant, confident smile that lights up the room."
        },
        {
            imgSrc: "https://cdn-icons-png.freepik.com/256/10277/10277035.png?ga=GA1.1.1198942412.1726855212&semt=ais_hybrid",
            title: "Oral Hygiene Experts",
            description: "Our team of oral hygiene experts is committed to providing personalized care and education to help you maintain a healthy, beautiful smile. From routine cleanings and preventive care to personalized oral health coaching, we'll work with you to develop a customized plan that addresses your unique needs and promotes a lifetime of good oral health."
        },
        {
            imgSrc: "https://cdn-icons-png.freepik.com/256/17561/17561507.png?ga=GA1.1.1198942412.1726855212&semt=ais_hybrid",
            title: "Root Canal Specialist",
            description: "Our experienced root canal specialists use the latest technology and techniques to provide gentle, effective treatment for damaged or infected teeth. With a focus on comfort and precision, we'll work to save your natural tooth, relieving pain and restoring your smile to its full potential. From diagnosis to treatment, we'll guide you through the process with care and compassion."
        },
        {
            imgSrc: "https://cdn-icons-png.freepik.com/256/1957/1957103.png?ga=GA1.1.1198942412.1726855212&semt=ais_hybrid",
            title: "Live Dental Advisory",
            description: "Get instant access to personalized dental advice with our live dental advisory service. Our team of experienced dentists and oral health experts are available to answer your questions, address your concerns, and provide guidance on maintaining good oral health. From routine care to complex dental issues, we're here to help you make informed decisions about your smile."
        },
        {
            imgSrc: "https://cdn-icons-png.freepik.com/256/8733/8733132.png?ga=GA1.1.1198942412.1726855212&semt=ais_hybrid",
            title: "Cavity Inspection",
            description: "Early detection is key to preventing cavities from causing more serious damage. Our cavity inspection process uses advanced digital imaging technology to identify even the smallest signs of tooth decay. Our skilled dentists will carefully examine your teeth, checking for any signs of weakness or damage, and provide personalized recommendations for treatment and prevention."
        }
    ];

    return (
        <section className="services" id="services">
            <h1 className="heading">our services</h1>
            <div className="box-container container">
                {/* Map over the serviceData array to render each service box */}
                {serviceData.map((service, index) => (
                    <div className="box" key={index}>
                        <img src={service.imgSrc} alt={service.title} style={{ width: '30px', height: '30px' }} />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;