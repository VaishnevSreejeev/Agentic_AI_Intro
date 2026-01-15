import React from 'react';
import { NavLink, Outlet, Routes, Route, Navigate } from 'react-router-dom';
import SupervisorPattern from './module4/SupervisorPattern';
import Hitl from './module4/Hitl';

const Module4 = () => {
    return (
        <div className="module-content">
            <h1>Module 4: Design Patterns</h1>

            {/* Tab Navigation */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-glass)' }}>
                <NavLink
                    to="supervisor"
                    className={({ isActive }) => isActive ? 'tab-active' : 'tab-inactive'}
                    style={{ padding: '1rem 2rem', textDecoration: 'none', color: 'var(--text-secondary)', borderBottom: '2px solid transparent' }}
                >
                    Supervisor
                </NavLink>
                <NavLink
                    to="hitl"
                    className={({ isActive }) => isActive ? 'tab-active' : 'tab-inactive'}
                    style={{ padding: '1rem 2rem', textDecoration: 'none', color: 'var(--text-secondary)', borderBottom: '2px solid transparent' }}
                >
                    Human-in-the-Loop
                </NavLink>
            </div>

            <style>
                {`
    .tab - active {
    color: var(--accent - primary)!important;
    border - bottom: 2px solid var(--accent - primary)!important;
    font - weight: bold;
}
                .tab - inactive:hover {
    color: var(--text - primary)!important;
}
`}
            </style>

            <Routes>
                <Route index element={<Navigate to="supervisor" replace />} />
                <Route path="supervisor" element={<SupervisorPattern />} />
                <Route path="hitl" element={<Hitl />} />
            </Routes>
        </div>
    );
};

export default Module4;
