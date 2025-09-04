# Paw-Alert

Paw-Alert is a full-stack web application designed to help users report and manage lost or found pets. It provides a platform for individuals to quickly submit details about pets, including images and location information, and offers an administrative interface to review and manage these reports.

## Features

*   **User Pet Reporting:** Intuitive interface for users to submit reports for lost or found pets with comprehensive details.
*   **Image Upload:** Support for uploading pet images, stored directly in the database for easy retrieval and display.
*   **Detailed Information Capture:** Fields for pet name, description, current location (with Google Maps URL integration), address details (line one, line two, landmark, zipcode, city, state), and contact information.
*   **Admin Panel:** A dedicated interface for administrators to view all pending pet reports.
*   **Report Management:** Administrators can easily delete processed or resolved pet reports from the system.
*   **Responsive Design:** (Inferred from Create React App, TailwindCSS dev dependency, and basic CSS for admin) Designed to be accessible across various devices.

## Technology Stack

### Frontend
*   **Framework:** React.js (bootstrapped with Create React App)
*   **Styling:** Tailwind CSS (configured as a dev dependency, indicating usage intent for modern styling), custom CSS for admin panel.
*   **Libraries:** `class-variance-authority`, `clsx`, `lucide-react`, `web-vitals`

### Backend
*   **Runtime:** Node.js
*   **Web Framework:** Express.js
*   **Database:** MongoDB (using Mongoose ODM for data modeling)
*   **API Management:** CORS (Cross-Origin Resource Sharing), Morgan (HTTP request logger)
*   **File Uploads:** Multer (configured for in-memory storage of images)
*   **Templating:** EJS (for rendering the Admin Panel)
*   **Environment Variables:** Dotenv

## Installation and Setup

To get Paw-Alert up and running on your local machine, follow these steps:

### Prerequisites

*   Node.js (LTS version recommended)
*   MongoDB instance (local or cloud-hosted)

### Backend Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd Paw-Alert/backend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Configure Environment Variables:**
    Create a `.env` file in the `backend` directory and add your MongoDB connection string:
    ```
    CONNECTION_STRING="mongodb://localhost:27017/pawalertdb"
    ```
    (Replace with your actual MongoDB connection string)
4.  **Start the backend server:**
    ```bash
    npm start
    ```
    The server will run on `http://localhost:8000`.

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd ../frontend/user-app
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the React development server:**
    ```bash
    npm start
    ```
    The React app will open in your browser, typically at `http://localhost:3000`.

## Usage

### User Reporting
Access the frontend application (e.g., `http://localhost:3000`) to submit a new report for a lost or found pet. Fill in the details, upload an image, and submit the form.

### Admin Panel
To access the admin panel, navigate to `http://localhost:8000/admin/get-pet-data` (assuming your backend is running on port 8000). Here, you can view all submitted pet reports and use the "Delete" button to remove entries.

## Project Structure

```
.
├── .DS_Store
├── README.md
├── backend/
│   ├── .DS_Store
│   ├── .gitignore
│   ├── Views/
│   │   ├── admin.css
│   │   └── admin.ejs
│   ├── app.js
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── animal.model.js
│   ├── package-lock.json
│   ├── package.json
│   └── routes/
│       ├── admin.routes.js
│       └── user.routes.js
└── frontend/
    └── user-app/
        ├── .gitignore
        ├── README.md
        ├── package-lock.json
        └── package.json
```

---

**
