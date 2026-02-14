# OpenLabs Attendance System
Backend Architecture Guide
Stack: Django + Django Rest Framework

---

## 1. System Overview

The backend is responsible for:
- Authentication
- Location validation
- Attendance recording
- Role-based permissions
- Admin monitoring

Frontend must NEVER decide attendance validity.
Backend must verify everything.

---

## 2. Database Design

### User Model
- id
- full_name
- email
- role (student / admin)
- password

---

### ClassLocation Model
- id
- latitude
- longitude
- allowed_radius_meters

---

### Attendance Model
- id
- student (ForeignKey)
- date
- timestamp
- latitude
- longitude
- status (present / rejected)

---

## 3. API Endpoints

### Authentication
POST /api/register
POST /api/login
POST /api/refresh

---

### Attendance
POST /api/attendance/mark
GET /api/attendance/my-records

---

### Admin
GET /api/admin/attendance
GET /api/admin/students
PUT /api/admin/location

---

## 4. Location Validation Logic

Use Haversine Formula.

Steps:
1. Receive student latitude & longitude
2. Get stored class location
3. Calculate distance
4. If distance <= allowed radius → Mark present
5. Else → Reject

Never trust frontend validation.

---

## 5. Backend Folder Structure

opendlab/
├── users/
├── attendance/
├── core/
├── settings.py


---

## 6. Implementation Roadmap

### Phase 1: Project Setup
- Create Django project
- Install DRF
- Setup PostgreSQL
- Setup JWT (SimpleJWT)

---

### Phase 2: Authentication
- Custom user model
- JWT authentication
- Role-based permissions

---

### Phase 3: Attendance Logic
- Create attendance model
- Implement location validation
- Prevent double attendance same day

---

### Phase 4: Admin Controls
- Modify allowed location
- View logs
- Filter by date

---

## 7. Role Distribution (Backend)

### Authentication Developer
- Custom user model
- JWT setup
- Permissions

---

### Attendance Logic Developer
- Haversine formula
- Duplicate prevention
- Time restriction logic

---

### Admin & Reporting Developer
- Filtering endpoints
- Aggregation
- Performance optimization

---

### DevOps / Deployment Developer
- Setup production environment
- Nginx
- Gunicorn
- SSL

---

## 8. Security Strategy

- Use HTTPS only
- Validate all inputs
- Rate limit attendance endpoint
- Prevent multiple submissions
- Log suspicious activity

---

## 9. Scaling Strategy

- Redis for caching
- Celery for async logs
- Database indexing on student and date
- Use Docker for deployment

---

## 10. Future Improvements

- Facial recognition validation
- Device fingerprinting
- Geo-fencing improvements
- Admin analytics dashboard

---

END OF BACKEND GUIDE
