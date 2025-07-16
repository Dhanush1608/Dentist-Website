// Load environment variables from .env file
require('dotenv').config();

// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors middleware

// Initialize the Express application
const app = express();

// --- Middleware ---
// Enable CORS for all origins during development.
// In production, you should restrict this to your frontend's domain:
// e.g., cors({ origin: 'https://your-dentist-frontend.com' })
app.use(cors());

// Parse JSON request bodies (for data sent from frontend)
app.use(express.json());

// Parse URL-encoded request bodies (for traditional form submissions, though JSON is preferred for APIs)
app.use(express.urlencoded({ extended: true }));

// --- Database Connection ---
// Get MongoDB connection string from environment variables
// Make sure to replace <username> and <password> in your .env file
const dbUri = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(dbUri)
    .then(() => console.log('MongoDB connected successfully!'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        // Exit process if database connection fails
        process.exit(1);
    });

// --- Mongoose Schema and Model for Appointments ---
const appointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'], // Name is a string and is required
        trim: true // Remove whitespace from both ends of a string
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: false, // Emails don't need to be unique for appointments
        trim: true,
        lowercase: true, // Store emails in lowercase
        match: [/.+@.+\..+/, 'Please enter a valid email address'] // Basic email regex validation
    },
    number: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true,
        // Optional: Add more specific phone number validation regex if needed
    },
    date: {
        type: Date, // Store date as a Date object
        required: [true, 'Appointment date is required'],
        min: [new Date(), 'Appointment date cannot be in the past'] // Ensure date is not in the past
    },
    submittedAt: {
        type: Date,
        default: Date.now // Automatically set the submission timestamp
    }
});

// Create the Mongoose Model from the schema
const Appointment = mongoose.model('Appointment', appointmentSchema);

// --- API Routes ---

// 1. POST /api/appointments - Route to create a new appointment
app.post('/api/appointments', async (req, res) => {
    try {
        // Extract data from the request body
        const { name, email, number, date } = req.body;

        // Basic server-side validation (Mongoose schema also handles some)
        if (!name || !email || !number || !date) {
            return res.status(400).json({ message: 'All appointment fields are required.' });
        }

        // Create a new appointment instance
        const newAppointment = new Appointment({
            name,
            email,
            number,
            date
        });

        // Save the appointment to the database
        await newAppointment.save();

        // Send a success response
        res.status(201).json({
            message: 'Appointment made successfully!',
            appointmentId: newAppointment._id, // Send back the ID of the new appointment
            status: 'success'
        });

    } catch (error) {
        // Handle validation errors from Mongoose or other errors
        console.error('Error saving appointment:', error);
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ message: messages.join(', '), status: 'error' });
        }
        res.status(500).json({ message: 'Appointment failed. Please try again later.', status: 'error' });
    }
});

// 2. GET /api/appointments - Route to get all appointments (for dentist admin)
// This route should eventually be protected by authentication!
app.get('/api/appointments', async (req, res) => {
    try {
        // Find all appointments, sort by date (oldest first)
        const appointments = await Appointment.find().sort({ date: 1 });
        res.status(200).json({
            message: 'Appointments fetched successfully.',
            appointments: appointments,
            status: 'success'
        });
    } catch (error) {
        console.error('Error fetching appointments:', error);
        res.status(500).json({ message: 'Failed to fetch appointments.', status: 'error' });
    }
});


// --- Server Start ---
const PORT = process.env.PORT || 3000; // Use port from .env or default to 3000
app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});