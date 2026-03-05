# ML Roadmap — Aditya Sarode

A personal Machine Learning learning roadmap website with admin panel, dark mode, and text highlights.

## Project Structure

```
mlroadmap/
├── frontend/          ← Deploy to Netlify
│   ├── index.html
│   ├── roadmap.html
│   ├── about.html
│   ├── admin.html
│   ├── _redirects
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── app.js
│       └── roadmap-content.js
│
├── backend/           ← Deploy to Render
│   ├── server.js
│   ├── package.json
│   └── data/
│       ├── admin.json
│       └── state.json
│
└── README.md
```

## Local Development

### Backend

```bash
cd backend
npm install
node server.js
```

Server starts at `http://localhost:3000`.

### Frontend

Open `frontend/index.html` directly or serve with any static server:

```bash
cd frontend
npx serve .
```

By default, `frontend/js/app.js` points `API_BASE_URL` to `http://localhost:3000`.

## Deployment

### Frontend → Netlify

1. Connect your repo to Netlify
2. Set **Base directory**: `frontend`
3. Set **Publish directory**: `frontend`
4. No build command needed (static files)

### Backend → Render

1. Create a new **Web Service** on Render
2. Set **Root directory**: `backend`
3. **Build command**: `npm install`
4. **Start command**: `node server.js`
5. Set environment variable:
   - `FRONTEND_URL` = your Netlify URL (e.g. `https://your-site.netlify.app`)

### Connect Frontend to Backend

Update `API_BASE_URL` in `frontend/js/app.js` to your Render backend URL:

```js
const API_BASE_URL = "https://your-backend.onrender.com";
```

## Features

- Dark mode toggle (persists in localStorage)
- Admin login (credentials stored securely with bcrypt — never exposed in frontend)
- Roadmap editor with Markdown + live preview
- Text highlights (admin adds, all users see)
- CORS-enabled Express backend
- Mobile-responsive college theme
