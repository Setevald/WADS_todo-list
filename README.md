# Todo App with Firebase Authentication

A simple React-based todo list application with user authentication using Firebase, styled with Tailwind CSS, and routed with React Router. Users can sign in with Google, manage their tasks, and view a profile page.

## Features
- Google sign-in via Firebase Authentication
- Add, edit, complete, and delete tasks
- Filter completed tasks
- Profile page with user info and logout option
- Responsive design with Tailwind CSS
- Routing with React Router

## Setup 

### 1. Clone the Repository
Clone this repository to your local machine:
```bash
git clone https://github.com/Setevald/WADS_lab.git
cd WADS_lab
```

### 2. Install Dependencies
Install the required packages
```bash
npm install
```

### 3 Firebase configuration
a. Create a Firebase Project
1. Go to firebase[https://console.firebase.google.com/] and sign in.
2. Click "Create a project," name it, and complete the setup.
3. In the Firebase Console, click the "Web" icon (</>) to register your app.
4. Click "Register app" and copy the firebaseConfig object.

b. Adding firebase config into the project
1. Open src/firebase.js (or create it if it doesn’t exist).
2. Paste your firebaseConfig into the file and initialize Firebase:

```bash
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
```

c.Enable Authentication
1. In the Firebase Console, go to "Authentication" > "Sign-in method."
2. Enable "Google" as a sign-in provider and save.

### 4 Run the application
Start the development server
```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the app.