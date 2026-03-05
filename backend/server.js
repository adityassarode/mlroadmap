const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, "data", "state.json");

// ===== Middleware =====
app.use(
  cors({
    origin: [
      "https://mlroadmaps.netlify.app",
      "http://localhost:3000",
      "http://127.0.0.1:5500",
    ],
    credentials: true,
  }),
);

app.use(express.json({ limit: "2mb" }));

// ===== Data Layer =====

function getDefaultState() {
  return {
    roadmap: null,
    highlights: [],
  };
}

function ensureDataDir() {
  const dir = path.join(__dirname, "data");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function loadState() {
  ensureDataDir();
  if (fs.existsSync(DATA_FILE)) {
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  }
  const state = getDefaultState();
  saveState(state);
  return state;
}

function saveState(state) {
  ensureDataDir();
  fs.writeFileSync(DATA_FILE, JSON.stringify(state, null, 2), "utf-8");
}

// ===== Admin Auth =====
const ADMIN_USERNAME = "adityassarode";
const ADMIN_PASSWORD_HASH_FILE = path.join(__dirname, "data", "admin.json");

function ensureAdminFile() {
  ensureDataDir();
  if (!fs.existsSync(ADMIN_PASSWORD_HASH_FILE)) {
    const hash = bcrypt.hashSync("Aditya@#2509", 10);
    fs.writeFileSync(
      ADMIN_PASSWORD_HASH_FILE,
      JSON.stringify({
        username: ADMIN_USERNAME,
        passwordHash: hash,
      }),
      "utf-8",
    );
  }
}

function getAdminCredentials() {
  ensureAdminFile();
  return JSON.parse(fs.readFileSync(ADMIN_PASSWORD_HASH_FILE, "utf-8"));
}

// Simple token-based session (in-memory)
const activeSessions = new Map();

function generateToken() {
  return crypto.randomBytes(32).toString("hex");
}

function authMiddleware(req, res, next) {
  const token = req.headers["authorization"]?.replace("Bearer ", "");
  if (!token || !activeSessions.has(token)) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  req.adminUser = activeSessions.get(token);
  next();
}

// ===== API Routes =====

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// POST /api/login
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password required" });
  }

  const admin = getAdminCredentials();

  if (
    username !== admin.username ||
    !bcrypt.compareSync(password, admin.passwordHash)
  ) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = generateToken();
  activeSessions.set(token, { username });

  res.json({ token, username });
});

// POST /api/logout
app.post("/api/logout", authMiddleware, (req, res) => {
  const token = req.headers["authorization"]?.replace("Bearer ", "");
  activeSessions.delete(token);
  res.json({ success: true });
});

// GET /api/roadmap
app.get("/api/roadmap", (req, res) => {
  const state = loadState();
  res.json({
    roadmap: state.roadmap,
    highlights: state.highlights || [],
  });
});

// PUT /api/roadmap
app.put("/api/roadmap", authMiddleware, (req, res) => {
  const { roadmap } = req.body;

  if (typeof roadmap !== "string" && roadmap !== null) {
    return res.status(400).json({ error: "Invalid roadmap content" });
  }

  const state = loadState();
  state.roadmap = roadmap;
  saveState(state);

  res.json({ success: true, roadmap: state.roadmap });
});

// DELETE /api/roadmap
app.delete("/api/roadmap", authMiddleware, (req, res) => {
  const state = loadState();
  state.roadmap = null;
  saveState(state);

  res.json({ success: true });
});

// GET /api/highlights
app.get("/api/highlights", (req, res) => {
  const state = loadState();
  res.json({ highlights: state.highlights || [] });
});

// PUT /api/highlights
app.put("/api/highlights", authMiddleware, (req, res) => {
  const { highlights } = req.body;

  if (!Array.isArray(highlights)) {
    return res.status(400).json({ error: "highlights must be an array" });
  }

  for (const h of highlights) {
    if (typeof h.text !== "string" || !h.text.trim()) {
      return res
        .status(400)
        .json({ error: "Each highlight must have non-empty text" });
    }
  }

  const state = loadState();
  state.highlights = highlights.map((h, i) => ({
    id: h.id || `hl-${Date.now()}-${i}`,
    text: h.text,
    color: h.color || "#fff3cd",
  }));
  saveState(state);

  res.json({ success: true, highlights: state.highlights });
});

// POST /api/highlights
app.post("/api/highlights", authMiddleware, (req, res) => {
  const { text, color } = req.body;

  if (typeof text !== "string" || !text.trim()) {
    return res.status(400).json({ error: "text is required" });
  }

  const state = loadState();
  if (!state.highlights) state.highlights = [];

  const highlight = {
    id: `hl-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    text: text.trim(),
    color: color || "#fff3cd",
  };

  state.highlights.push(highlight);
  saveState(state);

  res.json({ success: true, highlight, highlights: state.highlights });
});

// DELETE /api/highlights/:id
app.delete("/api/highlights/:id", authMiddleware, (req, res) => {
  const { id } = req.params;
  const state = loadState();

  if (!state.highlights) state.highlights = [];
  state.highlights = state.highlights.filter((h) => h.id !== id);
  saveState(state);

  res.json({ success: true, highlights: state.highlights });
});

// ===== Start =====
app.listen(PORT, () => {
  ensureAdminFile();
  console.log(`Backend running at http://localhost:${PORT}`);
});
