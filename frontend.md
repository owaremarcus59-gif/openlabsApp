# OpenLabs Attendance System
Frontend Strategy Guide
Stack: React (Vite or Next.js recommended), Tailwind CSS, Axios, React Router

---

## 1. Product Overview

This application allows OpenLabs students to mark attendance only if they are physically present at the approved class location.

Core frontend responsibilities:
- Authentication (Login/Register)
- Get user geolocation
- Compare location with backend allowed coordinates
- Allow attendance marking if location matches
- Show attendance history
- Admin dashboard for monitoring

---

## 2. UI / UX Design System

### Design Principles

- Clean and minimal
- Mobile-first design
- Simple color scheme (Blue + White + Neutral gray)
- Clear call-to-action buttons
- Large buttons for mobile usability
- Location verification feedback must be obvious

---

## 3. Main Pages

### 1. Landing Page
- Logo
- Login button
- Register button

---

### 2. Login Page
Fields:
- Email
- Password
- Submit button

UX:
- Show loading spinner
- Show clear error messages

---

### 3. Student Dashboard

Sections:
- Welcome message
- Current location status
- “Mark Attendance” button
- Attendance history table

UX Flow:
1. On load → Get browser location
2. Show:
   - “Location Verified” (Green)
   - OR “You are not at class location” (Red)
3. Enable button only if verified

---

### 4. Admin Dashboard

- List of students
- Attendance table
- Filter by date
- Location radius configuration

---

## 4. Suggested Folder Structure


src/
├── components/
│ ├── Button.jsx
│ ├── Navbar.jsx
│ ├── AttendanceCard.jsx
│
├── pages/
│ ├── Login.jsx
│ ├── Register.jsx
│ ├── Dashboard.jsx
│ ├── AdminDashboard.jsx
│
├── services/
│ ├── api.js
│ ├── authService.js
│ ├── attendanceService.js
│
├── hooks/
│ ├── useAuth.js
│ ├── useLocation.js
│
├── context/
│ ├── AuthContext.jsx
│
├── utils/
│ ├── locationHelper.js
│
└── App.jsx


Backend validates using distance formula (Haversine)

---

## 6. Frontend Roadmap (Step-by-Step)

### Phase 1: Setup
- Setup React project
- Install Tailwind
- Setup routing
- Create layout components

### Phase 2: Authentication
- Build login/register UI
- Connect to backend
- Store JWT
- Protect routes

### Phase 3: Location Integration
- Implement useLocation hook
- Handle permission denial
- Send coordinates to backend

### Phase 4: Attendance Feature
- Enable button only if location valid
- Show success message
- Refresh attendance history

### Phase 5: Admin Panel
- View attendance logs
- Filter by date
- Show analytics

---

## 7. Frontend Role Distribution

### UI Developer
- Build reusable components
- Ensure mobile responsiveness
- Implement Tailwind design

---

### State Management Developer
- Handle authentication state
- Implement context
- Manage protected routes

---

### API Integration Developer
- Connect all backend endpoints
- Handle token refresh
- Error handling

---

### Location Feature Developer
- Implement geolocation
- Handle permissions
- Optimize UX for location failure

---

## 8. Common Mistakes to Avoid

- Do not trust frontend location validation
- Do not store JWT in localStorage (security risk)
- Always handle location permission denial
- Always handle expired tokens

---

## 9. Future Improvements

- QR code backup attendance
- Push notifications
- Dark mode
- PWA support

---

END OF FRONTEND GUIDE
