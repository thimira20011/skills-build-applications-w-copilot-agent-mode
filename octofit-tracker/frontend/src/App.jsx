import { Link, Route, Routes, Navigate } from 'react-router-dom';

import Activities from './components/Activities.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import Teams from './components/Teams.jsx';
import Users from './components/Users.jsx';
import Workouts from './components/Workouts.jsx';

function Home() {
  return (
    <div className="container py-5">
      <div className="hero-card p-4 p-md-5 rounded-4 shadow-sm">
        <p className="text-uppercase text-accent fw-semibold mb-2">OctoFit Tracker</p>
        <h1 className="display-5 fw-bold mb-3">Track teams, workouts, and performance in one place.</h1>
        <p className="lead mb-4">
          React 19 and Vite power the presentation tier, with router-driven views backed by the OctoFit API.
        </p>
        <div className="d-flex gap-3 flex-wrap">
          <Link className="btn btn-primary btn-lg" to="/users">
            View Users
          </Link>
          <Link className="btn btn-outline-light btn-lg" to="/activities">
            View Activities
          </Link>
        </div>
      </div>
    </div>
  );
}

function Stack() {
  return (
    <div className="container py-5">
      <div className="metric-card p-4 p-md-5 rounded-4">
        <h2 className="fw-bold mb-3">Frontend Setup</h2>
        <ul className="mb-0 fs-5">
          <li>React 19 + Vite on port 5173</li>
          <li>Express API on port 8000</li>
          <li>Use <code>VITE_CODESPACE_NAME</code> in <code>.env.local</code> to build GitHub Codespaces API URLs</li>
        </ul>
      </div>
    </div>
  );
}

function AppShell({ children }) {
  return (
    <div className="app-shell min-vh-100">
      <header className="container py-3 d-flex align-items-center justify-content-between gap-3 flex-wrap">
        <Link className="brand-mark text-decoration-none fw-bold fs-4" to="/">
          OctoFit
        </Link>
        <nav className="nav nav-pills gap-2 flex-wrap">
          <Link className="nav-link" to="/users">
            Users
          </Link>
          <Link className="nav-link" to="/teams">
            Teams
          </Link>
          <Link className="nav-link" to="/activities">
            Activities
          </Link>
          <Link className="nav-link" to="/leaderboard">
            Leaderboard
          </Link>
          <Link className="nav-link" to="/workouts">
            Workouts
          </Link>
          <Link className="nav-link" to="/stack">
            Stack
          </Link>
        </nav>
      </header>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppShell>
  );
}