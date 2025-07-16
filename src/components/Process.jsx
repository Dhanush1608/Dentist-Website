import React from 'react';

const Process = () => {
    // Data for process steps
    const processData = [
        {
            imgSrc: "https://media.istockphoto.com/id/1274274019/vector/doctor-dentist-conducting-health-medical-check-up-treatment-looking-at-patient-oral-cavity.jpg?s=2048x2048&w=is&k=20&c=fyZiR042lnxRvgU2sG7NUGEwB7ZN-VLwwd8_Zp_Vts0=",
            title: "Cosmetic Dentistry",
            description: "Our cosmetic dentistry process involves a personalized consultation to understand your unique needs and goals. We then use advanced techniques and materials to create a customized treatment plan, which may include teeth whitening, veneers, bonding, or other procedures to enhance the appearance of your smile. Our experienced dentists will work with you to achieve the beautiful, confident smile you deserve."
        },
        {
            imgSrc: "https://media.istockphoto.com/id/1297011729/vector/man-at-dentist-black-doctor-treating-teeth-assistant-helping-flat-design-illustration-vector.jpg?s=2048x2048&w=is&k=20&c=RLWOIeNWWF2UN20OnIi65zLD9DRuHjWRJTtIUSJddZw=",
            title: "Pediatric Dentistry",
            description: "Our pediatric dentistry process is designed to make your child's dental experience fun and stress-free. We start with a gentle, kid-friendly consultation to assess their oral health and identify any potential issues. Our experienced pediatric dentists then work with your child to create a personalized treatment plan, which may include routine cleanings, fluoride treatments, and educational guidance on proper oral hygiene habits. Our goal is to help your child develop a healthy, happy smile that will last a lifetime."
        },
        {
            imgSrc: "https://media.istockphoto.com/id/1436665214/vector/dentistry-concept-woman-sitting-in-the-stemmatological-chair-dentist-is-examining-clints.jpg?s=2048x2048&w=is&k=20&c=sExxmC7fEC4fFUZn7kXO0H98C3wIVigX7azF1oqBW70=",
            title: "Dental Implants",
            description: "Our dental implant process begins with a comprehensive consultation to determine if implants are right for you. We then use advanced 3D imaging technology to plan and place the implant, ensuring a precise and comfortable procedure. Once the implant has integrated with your jawbone, we'll create a custom crown or restoration that blends seamlessly with your natural teeth, restoring your smile and confidence."
        }
    ];

    return (
        <section className="process">
            <h1 className="heading">Work Process</h1>
            <div className="box-container container">
                {/* Map over the processData array */}
                {processData.map((item, index) => (
                    <div className="box" key={index}>
                        <img src={item.imgSrc} alt={item.title} style={{ width: '250px' }} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Process;