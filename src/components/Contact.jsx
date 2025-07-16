import React, { useState } from 'react';

const Contact = () => {
    // State to hold form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        date: ''
    });
    // State for displaying messages to the user
    const [message, setMessage] = useState('Make an appointment with us!');
    const [messageColor, setMessageColor] = useState('var(--blue)'); // Initial message color

    // Handler for input changes to update state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    // Handler for form submission
    const handleSubmit = async (e) => { // Make function async to use await
        e.preventDefault(); // Prevent the default browser form submission

        setMessage('Booking appointment...'); // Show a loading message
        setMessageColor('orange'); // Indicate processing

        try {
            // Send data to your backend API
            const response = await fetch('http://localhost:3000/api/appointments', { // <-- IMPORTANT: This URL must match your backend server's address and endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Send form data as JSON
            });

            const result = await response.json(); // Parse the JSON response from backend

            if (response.ok) { // Check if the response status is 2xx (success)
                setMessage(result.message || 'Appointment made successfully!');
                setMessageColor('green'); // Success color
                setFormData({ name: '', email: '', number: '', date: '' }); // Clear form
            } else {
                // If response.ok is false, it means a 4xx or 5xx status code
                setMessage(result.message || 'Appointment failed. Please try again.');
                setMessageColor('red'); // Error color
            }
        } catch (error) {
            // This catches network errors (e.g., backend server not running)
            console.error('Error submitting appointment:', error);
            setMessage('Network error. Could not connect to the server.');
            setMessageColor('red');
        }

        // Reset message after a few seconds, regardless of success or failure
        setTimeout(() => {
            setMessage('Make an appointment with us!');
            setMessageColor('var(--blue)');
        }, 8000); // Message disappears after 8 seconds
    };

    return (
        <section className="contact" id="contact">
            <h1 className="heading">Make appointment</h1>
            <form onSubmit={handleSubmit}>
                {/* Message display area */}
                <p className="message" style={{ backgroundColor: messageColor }}>
                    {message}
                </p>
                <span>your name :</span>
                <input
                    type="text"
                    name="name"
                    placeholder="enter your name"
                    className="box"
                    value={formData.name} // Controlled component value
                    onChange={handleChange} // Update state on change
                    required
                />
                <span>your email :</span>
                <input
                    type="email"
                    name="email"
                    placeholder="enter your email"
                    className="box"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <span>your number :</span>
                <input
                    type="number"
                    name="number"
                    placeholder="enter your number"
                    className="box"
                    value={formData.number}
                    onChange={handleChange}
                    required
                />
                <span>appointment date :</span>
                <input
                    type="datetime-local"
                    name="date"
                    className="box"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
                <input type="submit" value="Make appointment" name="submit" className="link-btn" />
            </form>
        </section>
    );
};

export default Contact;