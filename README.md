# White Rays Technologies CMS

A modern React-based Content Management System for White Rays Technologies website with Firebase backend.

## Features

- 🎨 Modern UI with Tailwind CSS and shadcn/ui
- 🔥 Firebase integration for data persistence
- 📱 Responsive design
- ⚡ Fast development with Vite
- 🛠️ Admin panel for content management
- 🖼️ Logo upload functionality
- 📝 Dynamic content editing

## Getting Started

### Prerequisites

- Node.js & npm installed
- Firebase project setup

### Installation

```sh
# Clone the repository
git clone https://github.com/Theaksha/white-rays-cms.git

# Navigate to project directory
cd white-rays-cms

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Add your Firebase config to .env

# Start development server
npm run dev
```

## Firebase Setup

1. Create a Firebase project
2. Enable Firestore Database
3. Add your Firebase config to `.env` file
4. Access admin panel at `/admin`

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Firebase
- React Router

## Deployment

Build for production:

```sh
npm run build
```

Deploy to Vercel, Netlify, or any static hosting service.
