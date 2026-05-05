# Citas Médicas App

A web application for scheduling and managing medical appointments at **Clinica Family Care**.

## Description

Citas Médicas App allows patients to book medical appointments online and view existing appointments organized by specialty. It is built with React and uses Firebase Firestore as the backend database.

## Features

- **Book an appointment** – Fill out a form with your name, DUI (ID), email, medical specialty, day of the week, and preferred time slot.
- **View appointments** – Browse the appointment book filtered by medical specialty.
- **Real-time availability** – The app checks current appointments in Firestore to prevent double-booking.

## Available Specialties

- Medicina general (General Medicine)
- Odontología (Dentistry)
- Oftalmología (Ophthalmology)
- Psicología (Psychology)

## Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI framework |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Firebase Firestore](https://firebase.google.com/docs/firestore) | Cloud database |
| [React Router v6](https://reactrouter.com/) | Client-side routing |
| [React Hook Form](https://react-hook-form.com/) | Form state management |
| [Bootstrap 5](https://getbootstrap.com/) | CSS styling |

## Getting Started

### Prerequisites

- Node.js 16+ installed
- A Firebase project with Firestore enabled

### Installation

```bash
# Clone the repository
git clone https://github.com/DENISGUERRA777/Citas-Medicas-App.git
cd Citas-Medicas-App

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173/Citas-Medicas-App/](http://localhost:5173/Citas-Medicas-App/) in your browser.

### Build & Deploy

```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Live Demo

The app is deployed at: [https://denisguerra777.github.io/Citas-Medicas-App/](https://denisguerra777.github.io/Citas-Medicas-App/)

## Project Structure

```
src/
├── main.jsx                 # React entry point
├── App.jsx                  # Root component with routing
├── App.css                  # Application styles
├── context/
│   └── UserContext.jsx      # Global state context
└── pages/
    ├── HomeComponent.jsx    # Home page
    └── components/
        ├── FormComponent.jsx  # Appointment booking form
        └── BookComponent.jsx  # Appointments viewer
firebase/
└── config.js                # Firebase initialization
```
