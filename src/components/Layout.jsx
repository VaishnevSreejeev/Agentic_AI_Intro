import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  const navItems = [
    { path: '/', label: 'Overview' },
    { path: '/module1', label: '1. The Agentic Shift' },
    { path: '/module2', label: '2. Core Architecture' },
    { path: '/module3', label: '3. Framework Stack' },
    { path: '/module4', label: '4. Design Patterns' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar navigation */}
      <aside 
        className="glass-panel" 
        style={{
          width: '260px',
          position: 'fixed',
          height: '95vh',
          top: '2.5vh',
          left: '1rem',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 10
        }}
      >
        <div style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-glass)' }}>
          <h2 style={{ fontSize: '1.5rem', margin: 0, background: 'linear-gradient(to right, #00f0ff, #7000ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Agentic AI
          </h2>
          <small style={{ color: 'var(--text-secondary)' }}>Engineering Course</small>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={({ isActive }) => ({
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                color: isActive ? 'var(--bg-primary)' : 'var(--text-secondary)',
                backgroundColor: isActive ? 'var(--accent-primary)' : 'transparent',
                fontWeight: isActive ? '600' : '400',
                transition: 'all 0.2s',
                display: 'block'
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-glass)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          v1.0.0 • 60 Min Session
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={{ marginLeft: '290px', padding: '2.5vh 2rem', flex: 1, maxWidth: 'calc(100% - 300px)' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
