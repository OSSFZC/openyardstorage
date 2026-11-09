# OSS FZC - Energy Logistics — Lead dashboard (Vercel)

Read-only dashboard for every contact-form submission from the OSS website.
Next.js app that runs on Vercel, with leads stored in a Neon Postgres database.

- **Dashboard**: total / this month / last 7 days / today, 30-day chart, latest leads
- **All Leads**: search, date filter, lead details panel (view only)
- **Excel report**: branded `.xlsx` (logo, red header, filters, print layout), all or filtered
- **One login** from environment variables, no sign-up page

## How leads arrive

The website's `api/send.js` emails the client **and** POSTs the same submission to

```
https://<dashboard-domain>/api/lead?key=<WEBHOOK_KEY>
```

That URL is the website's `LEADHUB_URL` setting. Nothing else changes on the website.

## Put it live on Vercel

1. **GitHub**: create a new *private* repository and push this folder to it
   (`.env.local`, `.data/` and `node_modules/` are ignored, so no secrets are uploaded).
2. **Vercel → Add New → Project** → import that repository. Framework: Next.js (auto-detected).
3. **Database**: in the new project open **Storage → Create Database → Neon (Postgres)** →
   create (free plan is fine) → **Connect** to this project. This adds `DATABASE_URL` automatically.
   The `leads` table is created by the app on first use.
4. **Settings → Environment Variables** (Production, Preview and Development):

   | Name | Value |
   |---|---|
   | `ADMIN_USERNAME` | `osslogistics` |
   | `ADMIN_PASSWORD` | your password |
   | `WEBHOOK_KEY` | a long random string (32+ characters) |
   | `APP_TIMEZONE` | optional, default `Asia/Kolkata` (use `Asia/Dubai` for UAE time) |

5. **Deployments → Redeploy**. Open `https://<project>.vercel.app` and sign in.
6. Go to **Settings** in the dashboard and copy the **Website connection** URL.
7. In the **website's** Vercel project set `LEADHUB_URL` to that URL and redeploy the website.
   (`EMAIL_USER`, `EMAIL_PASS`, `EMAIL_TO` stay as they are for the client emails.)
8. Submit the live contact form once and check it appears on the dashboard.

Optional: add a custom domain such as `leads.oss-me.com` under **Settings → Domains**,
then update `LEADHUB_URL` on the website to use it.

## Change the login

Edit `ADMIN_USERNAME` / `ADMIN_PASSWORD` in Vercel and redeploy. Everyone signed in is signed out.

## Run on your PC

```bash
npm install
npm run dev
```

Opens on http://localhost:3001. Settings come from `.env.local` (see `.env.example`).
Without `DATABASE_URL` it uses an embedded database saved in `.data/` — no install needed.
In the website's `.env.local` use `LEADHUB_URL=http://127.0.0.1:3001/api/lead?key=<WEBHOOK_KEY>`.

## Files

| Path | What |
|---|---|
| `app/api/lead/route.js` | Webhook the website posts to |
| `app/api/export/route.js` + `lib/xlsx.js` | Excel report |
| `app/(app)/` | Dashboard, All Leads, Settings pages |
| `app/login/` | Sign-in page |
| `proxy.js` + `lib/auth.js` | Login check for every page |
| `lib/db.js` | Database (Neon live, embedded locally) |
