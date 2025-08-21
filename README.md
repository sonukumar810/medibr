# MediBridge – Doctor Appointment Platform

A full‑stack web application for discovering doctors, filtering by specialty, booking appointments, and managing the platform via an admin panel.

**Live Apps**

* **User App:** [https://medibr-p9a5gnibw-sonukumar1032004-1591s-projects.vercel.app/](https://medibr-p9a5gnibw-sonukumar1032004-1591s-projects.vercel.app/)
* **Admin App:** [https://medibr-rneq.vercel.app/](https://medibr-rneq.vercel.app/)

---

## Features

* **Role‑based authentication:** Users, Doctors, and Admins with protected routes.
* **Browse & filter doctors:** Specialty filters, search, and profile pages.
* **Book appointments:** Real‑time validation of slots and booking status.
* **Doctor tools:** Manage availability and appointment status.
* **Admin panel:** Manage doctors, users, and appointments; approve/reject doctors.
* **Responsive UI:** Optimized for mobile, tablet, and desktop.

> **Highlights:**
>
> * Designed and developed a fully responsive platform with secure, role‑based authentication.
> * Implemented advanced search, filtering, and appointment scheduling features; doctors manage schedules while admins oversee profiles & operations.
> * Engineered robust React + Node.js + Express + MongoDB stack for security, performance, and reliable data management.

---

## Tech Stack

**Frontend:** React, HTML, CSS, JavaScript

**Backend:** Node.js, Express

**Database:** MongoDB

**Hosting/Infra:** Vercel (frontend & admin), MongoDB Atlas (recommended)

---

## Project Structure

```txt
medibridge/
├─ frontend/              # User-facing React app
├─ admin/                 # Admin React app
├─ backend/               # Node.js + Express API
└─ README.md
```

---

## Getting Started (Local)

### 1) Clone the repository

```bash
git clone <your-repo-url>
cd medibridge
```

### 2) Install dependencies

```bash
# User app
cd frontend && npm install

# Admin app
cd ../admin && npm install

# API server
cd ../backend && npm install
```

### 3) Environment variables

Create `.env` files as shown below.



### 3) Run the apps

Open **three** terminals (or run in background):

```bash
# Terminal 1 – API
cd backend
npm run dev         # or: npm start

# Terminal 2 – User app
cd frontend
npm run dev         # opens on http://localhost:5173

# Terminal 3 – Admin app
cd admin
npm run dev
```

---

## NPM Scripts (typical)



> Adjust filenames/ports to match your codebase (`index.js`, `app.js`, etc.).

---

## API Overview (example)

Base URL: `${VITE_API_URL}` (local: `http://localhost:5000`)

### Auth

* `POST /api/auth/register` – create account (user/doctor)
* `POST /api/auth/login` – login, returns JWT
* `GET /api/auth/me` – current user profile (auth required)

### Doctors

* `GET  /api/doctors` – list + filters `?specialty=Cardiology&search=John`
* `GET  /api/doctors/:id` – doctor profile
* `POST /api/doctors` – (admin) create/approve doctor
* `PATCH /api/doctors/:id` – (admin/doctor) update

### Appointments

* `POST /api/appointments` – create booking `{doctorId, date, time}`
* `GET  /api/appointments` – list my appointments (role‑aware)
* `PATCH /api/appointments/:id/status` – update status (doctor/admin)

> Secure all protected routes with JWT middleware and role checks.

---

