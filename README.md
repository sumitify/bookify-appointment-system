# 📅 Bookify - Modern Appointment Booking System

A sleek, modern appointment booking system built with React and Firebase, featuring a multi-step wizard interface with real-time availability checking.

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![Firebase](https://img.shields.io/badge/Firebase-10.1.0-orange?logo=firebase)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-4.0-646CFF?logo=vite)

## ✨ Features

- **Multi-step Booking Wizard**: Intuitive 4-step booking process
- **Service Selection**: Choose from various services (Haircut, Manicure, Massage, Dental)
- **Staff Selection**: Pick your preferred specialist
- **Real-time Availability**: Dynamic time slot checking
- **Firebase Authentication**: Secure anonymous user authentication
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Modern UI**: Dark theme with glassmorphism effects
- **Smooth Animations**: GSAP-powered transitions
- **Progress Tracking**: Visual progress indicator

## 🚀 Live Demo

[View Live Demo](#) *(Add your deployed URL here)*

## 🛠️ Technologies Used

- **Frontend**: React 18, JavaScript (ES6+)
- **Styling**: Tailwind CSS with Montserrat font
- **Build Tool**: Vite
- **Authentication**: Firebase Auth (Anonymous)
- **Database**: Firebase Firestore (ready for integration)
- **Animation**: GSAP
- **Icons**: Custom SVG components

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sumitify/bookify-appointment-system.git
   cd bookify-appointment-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase** (Optional)
   - Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
   - Copy your Firebase config to `src/firebase/config.js`

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── App.jsx              # Main application component
│   ├── ServiceSelection.jsx # Service selection step
│   ├── StaffSelection.jsx   # Staff selection step
│   ├── DateTimeSelection.jsx# Date & time selection
│   ├── Confirmation.jsx     # Booking confirmation
│   ├── ConfirmationModal.jsx# Success modal
│   └── icons.jsx           # Custom icon components
├── firebase/
│   └── config.js           # Firebase configuration
├── index.css               # Global styles & Tailwind
└── main.jsx               # Application entry point
```

## 🎯 Usage

1. **Select a Service**: Choose from available services
2. **Pick Staff Member**: Select your preferred specialist
3. **Choose Date & Time**: Pick from available time slots
4. **Confirm Booking**: Review and confirm your appointment

## 🔧 Configuration

### Firebase Setup
Update `src/firebase/config.js` with your Firebase project credentials:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  // ... other config
};
```

### Customization
- **Services**: Modify `servicesData` in `App.jsx`
- **Staff**: Update `staffData` in `App.jsx`
- **Styling**: Customize colors in `tailwind.config.js`
- **Fonts**: Currently using Montserrat (configurable in Tailwind)

## 📱 Responsive Design

The application is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Firebase Hosting
```bash
npm run build
firebase deploy
```

## 🔮 Future Enhancements

- [ ] Real backend API integration
- [ ] Email notifications
- [ ] Calendar integration
- [ ] Payment processing
- [ ] Admin dashboard
- [ ] Multi-language support
- [ ] SMS reminders
- [ ] Recurring appointments

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sumit Kumar**
- GitHub: [@sumitify](https://github.com/sumitify)
- Email: inventor@outlook.in

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first styling
- Firebase for the backend services
- GSAP for smooth animations

---

⭐ Star this repository if you found it helpful!

The system is architected to be API-first and serverless, ensuring it is robust, scalable, and cost-effective.

### Frontend

-   **Framework**: **React.js** (v18+) with functional components and hooks.
-   **Styling**: **Tailwind CSS** for a utility-first, fully responsive design. Fluid widths and responsive utilities are prioritized over fixed pixels.
-   **Animations**: **GSAP (GreenSock Animation Platform)** loaded via CDN for high-performance, engaging UI animations and transitions.
-   **State Management**: `useState` and `useEffect` hooks for simple and predictable local state.
-   **Icons**: Inline SVGs for fast loading and easy customization.
-   **Font**: `Inter` (loaded via Google Fonts in `index.html`).

### Conceptual Backend

-   **Serverless Platform**: **AWS Lambda** is the ideal choice for running backend logic without managing servers. Vercel Functions are also a great alternative.
-   **API Layer**: **GraphQL (AWS AppSync)** provides a flexible and efficient way for the frontend to request exactly the data it needs. It acts as a managed gateway to our backend resources.
- a   **Database**: **Amazon DynamoDB** (NoSQL) is chosen for its virtually unlimited scalability, low latency, and seamless integration with AWS Lambda.
-   **Authentication**: **Firebase Authentication** is used for its generous free tier, ease of integration, and built-in security features.
-   **External API Integration**: **Google Calendar API** for checking real-time staff availability (free/busy) and automatically creating calendar events for new bookings.
-   **Notifications**: **Amazon SES (Simple Email Service)** or **Amazon SNS (Simple Notification Service)** for sending automated email or SMS confirmations and reminders.

### Architectural Diagram (Mermaid)

```mermaid
graph TD
    subgraph "User Device"
        A[React Frontend on Browser]
    end

    subgraph "Cloud Infrastructure (AWS)"
        B[Firebase Authentication]
        C[Amazon AppSync (GraphQL API)]
        D[AWS Lambda (Resolvers)]
        E[Amazon DynamoDB (Data Store)]
        F[Google Calendar API]
        G[Amazon SES/SNS (Notifications)]
    end

    A -- Signs In/Up --> B
    A -- GraphQL Queries/Mutations --> C
    C -- Invokes --> D
    D -- Reads/Writes Data --> E
    D -- Checks Availability/Creates Events --> F
    D -- Triggers --> G
    G -- Sends Email/SMS --> User
```

## 🚀 Getting Started

To run this frontend application locally, follow these steps.

### Prerequisites

-   Node.js (v18 or later)
-   npm or yarn

### 1. Set Up React Project

Clone this repository or set up a new React project using Vite:

```bash
npm create vite@latest my-booking-app -- --template react
cd my-booking-app
```

### 2. Install Dependencies

Install the necessary packages for Firebase.

```bash
npm install firebase
```

### 3. Replace `App.jsx`

Replace the content of `src/App.jsx` with the code provided in this document.

### 4. Configure `index.html`

Add the 'Inter' font and the GSAP library via CDN by editing your `index.html` file.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bookify - Appointment Scheduling</title>
    
    <link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)">
    <link rel="preconnect" href="[https://fonts.gstatic.com](https://fonts.gstatic.com)" crossorigin>
    <link href="[https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap](https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap)" rel="stylesheet">

    <script src="[https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js](https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js)"></script>
    
    <script>
      // In a real production app, use environment variables.
      // For this demo, we assume these might be injected by an environment like Replit/Canvas.
      window.__firebase_config = {
        apiKey: "AIzaSy...YOUR_API_KEY", // Replace with your Firebase config
        authDomain: "your-project-id.firebaseapp.com",
        projectId: "your-project-id",
        storageBucket: "your-project-id.appspot.com",
        messagingSenderId: "1234567890",
        appId: "1:1234567890:web:abcdef123456"
      };
      window.__app_id = window.__firebase_config.appId;
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

**Note:** You must replace the placeholder `__firebase_config` object with your actual Firebase project configuration. You can get this from the Firebase Console (`Project settings > General > Your apps`).

### 5. Configure Tailwind CSS

Follow the official [Tailwind CSS with Vite guide](https://tailwindcss.com/docs/guides/vite) to set up Tailwind. Ensure you add the `Inter` font to your `tailwind.config.js`:

```js
// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
```

### 6. Run the Application

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 🔮 Future Enhancements & Backend Development Steps

1.  **Define GraphQL Schema**: In AWS AppSync, define your schema (`schema.graphql`) with types like `Service`, `Staff`, `Appointment`, and the necessary queries (`getAvailableSlots`, `listServices`) and mutations (`createAppointment`, `cancelAppointment`).
2.  **Set Up DynamoDB Tables**: Create DynamoDB tables for `Services`, `Staff`, and `Appointments` with appropriate primary and secondary keys for efficient querying.
3.  **Implement Lambda Resolvers**: Write AWS Lambda functions (e.g., in Node.js or Python) to act as resolvers for your GraphQL operations. These functions will contain the business logic to interact with DynamoDB and the Google Calendar API.
4.  **Google Calendar API Integration**:
    -   Set up a Google Cloud project and enable the Calendar API.
    -   Use OAuth 2.0 (server-to-server flow with a service account) to authorize your backend to access staff calendars.
    -   Store refresh tokens securely (e.g., in AWS Secrets Manager).
    -   Implement logic in your `getAvailableSlots` resolver to query the `freeBusy` endpoint of the Google Calendar API.
    -   The `createAppointment` resolver should create a new event in the corresponding staff member's calendar.
5.  **Flesh out Authentication**: Expand Firebase Authentication to include email/password and social providers. Implement role-based access control (RBAC) by adding a `role` custom claim (`admin` or `client`) to user tokens.
6.  **Build Admin Dashboard**: Create a separate, secured part of the application for administrators to manage services, staff, working hours, and view all appointments.

---
*This project was built using free internet resources, including React documentation, Tailwind CSS, GSAP, Firebase, and various open-source libraries.*