# Dosthi Backend API

## Setup

1. Copy `.env.example` to `.env`
2. Install dependencies: `npm install`
3. Start server: `npm run dev`

## API Groups

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/admin/login`
- `POST /api/auth/forgot-password`
- `POST /api/auth/reset-password`
- `POST /api/auth/logout`
- `GET /api/auth/me`

- `GET /api/bookings`
- `POST /api/bookings`
- `PATCH /api/bookings/:id`
- `PATCH /api/bookings/:id/cancel`
- `PATCH /api/bookings/:id/status` (admin)
- `GET /api/bookings/availability`
- `GET /api/bookings/calendar`

- `GET /api/services`
- `GET /api/services/:id`
- `POST /api/services` (admin)
- `PATCH /api/services/:id` (admin)
- `DELETE /api/services/:id` (admin)

- `GET /api/portfolio`
- `POST /api/portfolio` (admin)
- `PATCH /api/portfolio/:id` (admin)
- `DELETE /api/portfolio/:id` (admin)

- `GET /api/gallery`
- `POST /api/gallery` (admin)
- `PATCH /api/gallery/:id` (admin)
- `DELETE /api/gallery/:id` (admin)

- `POST /api/contact`
- `POST /api/contact/newsletter`
- `GET /api/contact/messages` (admin)

- `GET /api/admin/dashboard` (admin)
