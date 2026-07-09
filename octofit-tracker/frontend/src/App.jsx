import { Link, Route, Routes } from 'react-router-dom';

function Home() {
  return (
    <div className="container py-5">
      <div className="hero-card p-4 p-md-5 rounded-4 shadow-sm">
        <p className="text-uppercase text-accent fw-semibold mb-2">OctoFit Tracker</p>
        <h1 className="display-5 fw-bold mb-3">Modern multi-tier fitness tracking starts here.</h1>
        <p className="lead mb-4">
          React 19 on the frontend, Express and TypeScript on the backend, and MongoDB for persistent workout data.
        </p>
        <div className="d-flex gap-3 flex-wrap">
          <Link className="btn btn-primary btn-lg" to="/dashboard">
            Open Dashboard
          </Link>
          <Link className="btn btn-outline-light btn-lg" to="/about">
            View Stack
          </Link>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Dashboard</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="metric-card p-4 rounded-4 h-100">
            <h3 className="h5">Activity Logging</h3>
            <p className="mb-0">Track workouts, sessions, and progress over time.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="metric-card p-4 rounded-4 h-100">
            <h3 className="h5">Team Leaderboard</h3>
            <p className="mb-0">Compete with teammates and surface performance trends.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="metric-card p-4 rounded-4 h-100">
            <h3 className="h5">Workout Suggestions</h3>
            <p className="mb-0">Personalized recommendations driven by stored user data.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="container py-5">
      <div className="metric-card p-4 p-md-5 rounded-4">
        <h2 className="fw-bold mb-3">Stack</h2>
        <ul className="mb-0 fs-5">
          <li>React 19 + Vite on port 5173</li>
          <li>Express + TypeScript API on port 8000</li>
          <li>MongoDB on port 27017 with Mongoose models</li>
        </ul>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-shell min-vh-100">
      <header className="container py-3 d-flex align-items-center justify-content-between">
        <Link className="brand-mark text-decoration-none fw-bold fs-4" to="/">
          OctoFit
        </Link>
        <nav className="nav nav-pills gap-2">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}