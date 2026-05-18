# Bharat Guide Clean

Bharat Guide is now structured as a single project that serves:

- static frontend pages from the repo root
- Express API from `backend/`
- optional MongoDB persistence with automatic memory fallback

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Create env file:

```bash
cp .env.example .env
```

3. Start the app:

```bash
npm run dev
```

4. Open:

```text
http://localhost:5050
```

## Environment variables

- `PORT`: server port, default `5050`
- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: JWT signing secret

If MongoDB is unavailable, the backend automatically serves bundled default data and keeps auth data in memory for the current process.

## Deploy

This repo is ready for a single Node hosting service such as Render, Railway, or similar.

- Build command: `npm install`
- Start command: `npm start`

Static pages are served by Express, so you do not need a separate frontend hosting service unless you want one.

## Main API routes

- `GET /api/health`
- `GET /api/cities`
- `GET /api/cities/:cityKey`
- `GET /api/states`
- `GET /api/states/:stateKey`
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `POST /api/auth/request-otp`
- `POST /api/auth/verify-otp`
- `GET /api/hotels`
- `GET /api/restaurants`
- `GET /api/packages`
- `GET /api/trip`
- `GET /api/places`
- `GET /api/reviews`
- `POST /api/chat`
