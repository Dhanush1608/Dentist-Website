# Dentist Appointment Booking System

## Project Overview
This is a full-stack web application designed to streamline the appointment booking process for a dental clinic. It provides a user-friendly interface for patients to schedule appointments and a robust backend to manage these bookings. This project demonstrates proficiency in modern web development technologies across both frontend and backend.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features
- **Responsive Frontend:** A clean, modern, and responsive user interface built with React.js, ensuring optimal viewing across various devices (desktop, tablet, mobile).
- **Appointment Booking Form:** Allows patients to easily submit their name, email, phone number, and desired appointment date/time.
- **Backend API:** A robust Node.js Express.js server to handle appointment submissions, validate data, and interact with the database.
- **Cloud Database Integration:** Utilizes MongoDB Atlas for secure and scalable storage of all appointment details.
- **CORS Configuration:** Properly configured Cross-Origin Resource Sharing to enable secure communication between the frontend and backend running on different ports.
- **Dynamic UI Updates:** Provides immediate feedback to the user on the success or failure of their appointment booking.

---

## Technologies Used

### Frontend
- **React.js**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool that significantly improves the development experience for modern web projects.
- **HTML5**: For structuring the web content.
- **CSS3**: For styling the application.
- **JavaScript (ES6+)**: For interactive functionality.
- **Bootstrap 4.6.1**: A popular CSS framework for responsive design and UI components.

### Backend
- **Node.js**: A JavaScript runtime environment for server-side development.
- **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **Dotenv**: For managing environment variables securely.
- **CORS**: Node.js middleware for enabling Cross-Origin Resource Sharing.

### Database
- **MongoDB Atlas**: A cloud-hosted NoSQL database service.

---

## Project Structure

```
dentist-website/
├── public/                   # Static assets (images, index.html)
├── src/                      # React frontend source code
│   ├── components/           # Reusable React components (Header, Home, Contact, etc.)
│   ├── styles/               # Your custom global CSS (style.css)
│   ├── App.jsx               # Main React application component
│   └── main.jsx              # React entry point
├── backend/                  # Node.js Express backend
│   ├── server.js             # Main backend server logic and API routes
│   ├── package.json          # Backend dependencies and scripts
│   ├── .env                  # Environment variables
│   └── node_modules/         # Backend dependencies
├── node_modules/ (frontend)  # Frontend dependencies
├── package.json (frontend)   # Frontend dependencies and scripts
├── .gitignore
├── README.md
└── vite.config.js
```

---

## Getting Started

### Prerequisites
- **Node.js** (LTS version recommended) and **npm**
  - [Download Node.js](https://nodejs.org/)
- **MongoDB Atlas Account**
  - [Sign Up for MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

### Backend Setup

1. Navigate to the backend directory:

```bash
cd dentist-website/backend
```

2. Install backend dependencies:

```bash
npm install
```

3. Configure MongoDB Atlas:

- Log in to your MongoDB Atlas dashboard.
- Create a Shared Cluster (M0 Sandbox).
- Go to **Security > Network Access** and click **+ ADD IP ADDRESS**.
  - Select **Add Current IP Address** or allow access from `0.0.0.0/0` (less secure).
- Go to **Security > Database Access**, click **+ ADD NEW DATABASE USER**:
  - Choose a username and strong password.
  - Grant **read and write to any database**.
- Get your **connection string**:
  - Format:  
    ```
    mongodb+srv://<username>:<password>@clustername.mongodb.net/?retryWrites=true&w=majority&appName=YourAppName
    ```

4. Create a `.env` file in `/backend`:

```bash
# dentist-website/backend/.env
MONGO_URI=mongodb+srv://Dhanush:YOUR_ACTUAL_PASSWORD_HERE@dentistappointments.bdzjfge.mongodb.net/contact_db?retryWrites=true&w=majority&appName=DentistAppointments
PORT=3000
```

> Replace `YOUR_ACTUAL_PASSWORD_HERE` with your actual password.

5. Start the backend server:

```bash
node server.js
```

---

### Frontend Setup

1. Open a **new terminal**.

2. Navigate to the frontend root:

```bash
cd dentist-website
```

3. Install frontend dependencies:

```bash
npm install
```

4. Start the frontend dev server:

```bash
npm run dev
```

Open your browser Ex : [http://localhost:5173](http://localhost:5173)

---

## Usage

- Go to [http://localhost:5173](http://localhost:5173)
- Navigate to the "Make Appointment" section
- Fill in your name, email, phone number, and desired date/time
- Click "Make Appointment"
- You should see:
  - A success or error message on the frontend
  - Backend logs in the terminal
  - Appointment stored in MongoDB Atlas under `contact_db` > `appointments` collection

---

## Future Enhancements

- **Admin Dashboard**
  - Authentication for staff/dentists
  - View/confirm/reschedule/cancel appointments
  - Set working hours
- **Notifications**
  - Email or SMS alerts for both dentist and patient
- **Calendar Integration**
  - Google Calendar, Outlook support
- **Advanced Scheduling**
  - Avoid double-bookings
  - Handle multiple dentists
- **Payment Integration**
  - Collect consultation fees
- **UI Improvements**
  - Use libraries like MUI, Framer Motion
- **Deployment**
  - Frontend: Netlify/Vercel
  - Backend: Render/Railway

---

## Contributing

Contributions are welcome!

1. Fork this repository
2. Create a new branch:

```bash
git checkout -b feature/your-feature
```

3. Make changes and commit:

```bash
git commit -m "Add your feature"
```

4. Push your branch:

```bash
git push origin feature/your-feature
```

5. Open a Pull Request

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## Contact

**Name:** Ramavathu Dhanush Naik  
**Email:** dhansuhramavath1712@gmail.com  
**GitHub:** [https://github.com/Dhanush1608](https://github.com/Dhanush1608)

> Feel free to reach out for questions, collaboration, or feedback!
