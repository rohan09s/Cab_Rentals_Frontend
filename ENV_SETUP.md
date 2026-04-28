# Environment Variables Setup

This project uses Vite's environment variable system to manage different configurations for development and production.

## How It Works

Vite automatically loads environment files based on the current mode:

- **`.env`** - Default values (fallback)
- **`.env.local`** - Local overrides (NOT committed to git)
- **`.env.production`** - Production-specific variables (committed to git)
- **`.env.example`** - Template for developers

## Environment Variables

### `VITE_API_URL`
- **Development**: `http://localhost:5000` (local backend)
- **Production**: `https://cab-backend-zca0.onrender.com` (deployed backend)

### `VITE_RAZORPAY_KEY`
- Razorpay test key (same for both dev and production environments)

## Running Locally

For local development with your local backend:

```bash
npm run dev
```

This automatically uses `.env.local` (if it exists) or `.env`, both pointing to `http://localhost:5000`.

## Building for Production

When deploying to production:

```bash
npm run build
```

This automatically uses `.env.production`, pointing to your deployed backend URL.

## Setup Instructions

1. **For Local Development:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local if needed (e.g., if your local backend is on a different port)
   npm run dev
   ```

2. **For Production:**
   - Ensure `.env.production` contains the correct production backend URL
   - Run: `npm run build`
   - Deploy the `dist` folder

## Important Notes

- **DO NOT commit `.env.local`** to git (it's in `.gitignore`)
- **DO commit `.env.production`** to git (it contains production URLs)
- **DO commit `.env`** to git (default fallback values)
- Access environment variables in code via `import.meta.env.VITE_*`

## Example Usage in Code

```javascript
const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY;

fetch(`${apiUrl}/api/payment/create-order`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ amount: 500 }),
});
```
