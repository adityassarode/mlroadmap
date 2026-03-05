// ===== Aditya Sarode - ML Roadmap Website =====
// Frontend with backend API integration, dark mode, and highlights

// Backend API URL (Render deployment)
const API_BASE_URL = "https://mlroadmap.onrender.com";

// ===== Utility Functions =====

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function getAuthToken() {
  return sessionStorage.getItem("admin_token");
}

function setAuthToken(token) {
  sessionStorage.setItem("admin_token", token);
}

function clearAuthToken() {
  sessionStorage.removeItem("admin_token");
}

function isLoggedIn() {
  return !!getAuthToken();
}

async function apiRequest(path, options = {}) {
  const token = getAuthToken();
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${API_BASE_URL}${path}`, { ...options, headers });
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || `Request failed (${res.status})`);
  }
  return data;
}

// ===== Dark Mode =====

function getTheme() {
  return localStorage.getItem("theme") || "light";
}

function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
  updateThemeToggleIcon();
}

function toggleTheme() {
  const current = getTheme();
  setTheme(current === "dark" ? "light" : "dark");
}

function updateThemeToggleIcon() {
  const btns = document.querySelectorAll(".theme-toggle");
  const isDark = getTheme() === "dark";
  btns.forEach((btn) => {
    btn.textContent = isDark ? "\u2600\uFE0F" : "\uD83C\uDF19";
    btn.title = isDark ? "Switch to light mode" : "Switch to dark mode";
  });
}

function initTheme() {
  const theme = getTheme();
  document.documentElement.setAttribute("data-theme", theme);
  updateThemeToggleIcon();

  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.addEventListener("click", toggleTheme);
  });
}

// ===== Mobile Navigation =====

function initMobileNav() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }
}

// ===== Roadmap Rendering =====

function getRoadmapContent() {
  return DEFAULT_ROADMAP_CONTENT;
}

function applyHighlights(html, highlights) {
  if (!highlights || highlights.length === 0) return html;

  let result = html;
  for (const hl of highlights) {
    const escapedText = hl.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escapedText})`, "gi");
    result = result.replace(
      regex,
      `<mark class="roadmap-highlight" style="background:${escapeHtml(hl.color)}">\$1</mark>`,
    );
  }
  return result;
}

async function renderRoadmap() {
  const container = document.getElementById("roadmap-display");
  if (!container) return;

  let content = getRoadmapContent();
  let highlights = [];

  // Fetch from backend
  try {
    const data = await apiRequest("/api/roadmap");
    if (data.roadmap) content = data.roadmap;
    highlights = data.highlights || [];
  } catch (e) {
    // Fallback to default content if server is unavailable
    console.warn(
      "Could not fetch from server, using default content:",
      e.message,
    );
  }

  let html;
  if (typeof marked !== "undefined") {
    marked.setOptions({ breaks: true, gfm: true });
    html = marked.parse(content);
  } else {
    html =
      '<pre style="white-space: pre-wrap;">' + escapeHtml(content) + "</pre>";
  }

  // Apply highlights
  html = applyHighlights(html, highlights);
  container.innerHTML = html;
}

// ===== Admin Panel =====

async function handleLogin(e) {
  e.preventDefault();

  const username = document.getElementById("admin-username").value.trim();
  const password = document.getElementById("admin-password").value;
  const errorEl = document.getElementById("login-error");

  if (!username || !password) {
    errorEl.textContent = "Please enter both username and password.";
    errorEl.classList.remove("hidden");
    return;
  }

  try {
    const data = await apiRequest("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    setAuthToken(data.token);
    errorEl.classList.add("hidden");
    showEditorPanel();
  } catch (err) {
    errorEl.textContent = err.message || "Invalid credentials.";
    errorEl.classList.remove("hidden");
  }
}

async function showEditorPanel() {
  const loginSection = document.getElementById("login-section");
  const editorSection = document.getElementById("editor-section");

  if (loginSection) loginSection.classList.add("hidden");
  if (editorSection) {
    editorSection.classList.remove("hidden");

    // Load roadmap content from server
    const textarea = document.getElementById("roadmap-editor");
    try {
      const data = await apiRequest("/api/roadmap");
      textarea.value = data.roadmap || DEFAULT_ROADMAP_CONTENT;
    } catch (e) {
      textarea.value = DEFAULT_ROADMAP_CONTENT;
    }

    // Load highlights
    await loadHighlightsList();
  }
}

function showLoginPanel() {
  const loginSection = document.getElementById("login-section");
  const editorSection = document.getElementById("editor-section");

  if (loginSection) loginSection.classList.remove("hidden");
  if (editorSection) editorSection.classList.add("hidden");
}

async function handleSaveRoadmap() {
  const textarea = document.getElementById("roadmap-editor");
  const statusEl = document.getElementById("save-status");
  if (!textarea) return;

  try {
    await apiRequest("/api/roadmap", {
      method: "PUT",
      body: JSON.stringify({ roadmap: textarea.value }),
    });
    showStatus(
      statusEl,
      "Roadmap saved successfully! Changes are now visible to all users.",
      "success",
    );
  } catch (err) {
    showStatus(statusEl, "Failed to save: " + err.message, "error");
  }
}

async function handleResetRoadmap() {
  if (!confirm("Reset roadmap to the original content? This cannot be undone."))
    return;

  const statusEl = document.getElementById("save-status");
  try {
    await apiRequest("/api/roadmap", { method: "DELETE" });
    const textarea = document.getElementById("roadmap-editor");
    if (textarea) textarea.value = DEFAULT_ROADMAP_CONTENT;
    showStatus(statusEl, "Roadmap reset to original content.", "success");
  } catch (err) {
    showStatus(statusEl, "Failed to reset: " + err.message, "error");
  }
}

function handlePreview() {
  const textarea = document.getElementById("roadmap-editor");
  const previewEl = document.getElementById("roadmap-preview");
  if (!textarea || !previewEl) return;

  if (previewEl.classList.contains("hidden")) {
    let html;
    if (typeof marked !== "undefined") {
      marked.setOptions({ breaks: true, gfm: true });
      html = marked.parse(textarea.value);
    } else {
      html =
        '<pre style="white-space: pre-wrap;">' +
        escapeHtml(textarea.value) +
        "</pre>";
    }
    previewEl.innerHTML = html;
    previewEl.classList.remove("hidden");
    textarea.classList.add("hidden");
  } else {
    previewEl.classList.add("hidden");
    textarea.classList.remove("hidden");
  }
}

async function handleLogout() {
  try {
    await apiRequest("/api/logout", { method: "POST" });
  } catch (e) {
    // ignore
  }
  clearAuthToken();
  showLoginPanel();
  const usernameEl = document.getElementById("admin-username");
  const passwordEl = document.getElementById("admin-password");
  if (usernameEl) usernameEl.value = "";
  if (passwordEl) passwordEl.value = "";
}

function showStatus(el, message, type) {
  if (!el) return;
  el.textContent = message;
  el.className = `alert alert-${type}`;
  el.classList.remove("hidden");
  setTimeout(() => el.classList.add("hidden"), 4000);
}

// ===== Highlights Management =====

async function loadHighlightsList() {
  const listEl = document.getElementById("highlights-list");
  if (!listEl) return;

  try {
    const data = await apiRequest("/api/highlights");
    renderHighlightsList(data.highlights || []);
  } catch (e) {
    listEl.innerHTML =
      '<li style="color:var(--text-muted);">Could not load highlights.</li>';
  }
}

function renderHighlightsList(highlights) {
  const listEl = document.getElementById("highlights-list");
  if (!listEl) return;

  if (highlights.length === 0) {
    listEl.innerHTML =
      '<li style="color:var(--text-muted); border:none; padding: 8px 0;">No highlights yet. Add one above.</li>';
    return;
  }

  listEl.innerHTML = highlights
    .map(
      (hl) => `
    <li>
      <span class="hl-color-swatch" style="background:${escapeHtml(hl.color)}"></span>
      <span class="hl-text">${escapeHtml(hl.text)}</span>
      <button class="btn btn-danger btn-sm" onclick="removeHighlight('${escapeHtml(hl.id)}')">Remove</button>
    </li>
  `,
    )
    .join("");
}

async function addHighlight() {
  const textInput = document.getElementById("hl-text-input");
  const colorInput = document.getElementById("hl-color-input");
  const statusEl = document.getElementById("hl-status");

  const text = textInput.value.trim();
  if (!text) {
    showStatus(statusEl, "Please enter text to highlight.", "error");
    return;
  }

  try {
    const data = await apiRequest("/api/highlights", {
      method: "POST",
      body: JSON.stringify({ text, color: colorInput.value }),
    });
    textInput.value = "";
    renderHighlightsList(data.highlights);
    showStatus(
      statusEl,
      "Highlight added! It will appear in the roadmap for all users.",
      "success",
    );
  } catch (err) {
    showStatus(statusEl, "Failed to add highlight: " + err.message, "error");
  }
}

async function removeHighlight(id) {
  const statusEl = document.getElementById("hl-status");
  try {
    const data = await apiRequest(`/api/highlights/${encodeURIComponent(id)}`, {
      method: "DELETE",
    });
    renderHighlightsList(data.highlights);
    showStatus(statusEl, "Highlight removed.", "success");
  } catch (err) {
    showStatus(statusEl, "Failed to remove: " + err.message, "error");
  }
}

// ===== Admin Tabs =====

function initAdminTabs() {
  const tabs = document.querySelectorAll(".admin-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      document
        .querySelectorAll(".tab-content")
        .forEach((c) => c.classList.remove("active"));
      const target = document.getElementById(tab.dataset.tab);
      if (target) target.classList.add("active");
    });
  });
}

// ===== Init =====

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMobileNav();

  // Roadmap page
  if (document.getElementById("roadmap-display")) {
    renderRoadmap();
  }

  // Admin page
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);

    if (isLoggedIn()) {
      showEditorPanel();
    }

    initAdminTabs();
  }

  // Admin buttons
  const saveBtn = document.getElementById("btn-save");
  if (saveBtn) saveBtn.addEventListener("click", handleSaveRoadmap);

  const resetBtn = document.getElementById("btn-reset");
  if (resetBtn) resetBtn.addEventListener("click", handleResetRoadmap);

  const previewBtn = document.getElementById("btn-preview");
  if (previewBtn) previewBtn.addEventListener("click", handlePreview);

  const logoutBtn = document.getElementById("btn-logout");
  if (logoutBtn) logoutBtn.addEventListener("click", handleLogout);

  const addHlBtn = document.getElementById("btn-add-highlight");
  if (addHlBtn) addHlBtn.addEventListener("click", addHighlight);
});
