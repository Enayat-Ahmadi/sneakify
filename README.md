# Sneakify

Sneakify is a full-stack sneaker e-commerce app built with Next.js, MongoDB, and NextAuth.

## Features

- Browse and search sneakers by gender, brand, and category
- Product details with size selection and image gallery
- Wishlist and cart stored in browser localStorage
- Checkout flow that creates orders through API routes
- Admin panel for managing products and viewing orders
- OAuth login with Google and GitHub

## Tech Stack

- Next.js (Pages Router), React, SWR
- Tailwind CSS + shadcn UI components
- MongoDB + Mongoose
- NextAuth for authentication and admin access control

## Project Structure

- `/pages` – app routes and API endpoints
- `/components` – UI and feature components
- `/db` – database connection, models, and seed data
- `/hooks` – cart and wishlist hooks
- `/lib` – shared utility helpers

## Getting Started

1. Install dependencies:

```bash
npm ci
```

2. Create `.env.local` with required values:

- `MONGODB_URI`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- `GITHUB_ID`
- `GITHUB_SECRET`
- `GOOGLE_ID`
- `GOOGLE_SECRET`
- `ADMIN_EMAILS` (comma-separated list)

3. Seed products (optional):

```bash
npm run seed
```

4. Start development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` – start development server
- `npm run build` – production build
- `npm run start` – run production server
- `npm run lint` – run ESLint
- `npm run seed` – seed product data
