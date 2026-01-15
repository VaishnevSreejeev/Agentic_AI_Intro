import React from 'react';
import { NavLink, Outlet, Routes, Route, Navigate } from 'react-router-dom';
import TheShift from './module1/TheShift';
import ReactLoop from './module1/ReactLoop';

const Module1 = () => {
    return (
        <div className="module-content">
            <h1>Module 1: The Agentic Shift</h1>

            {/* Tab Navigation */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-glass)' }}>
                <NavLink
                    to="shift"
                    className={({ isActive }) => isActive ? 'tab-active' : 'tab-inactive'}
                    style={{ padding: '1rem 2rem', textDecoration: 'none', color: 'var(--text-secondary)', borderBottom: '2px solid transparent' }}
                >
                    The Shift
                </NavLink>
                <NavLink
                    to="react-loop"
                    className={({ isActive }) => isActive ? 'tab-active' : 'tab-inactive'}
                    style={{ padding: '1rem 2rem', textDecoration: 'none', color: 'var(--text-secondary)', borderBottom: '2px solid transparent' }}
                >
                    ReAct Pattern
                </NavLink>
            </div>

            <style>
                {`
                .tab-active {
                    color: var(--accent-primary) !important;
                    border-bottom: 2px solid var(--accent-primary) !important;
                    font-weight: bold;
                }
                .tab-inactive:hover {
                    color: var(--text-primary) !important;
                }
                `}
            </style>

            <Routes>
                <Route index element={<Navigate to="shift" replace />} />
                <Route path="shift" element={<TheShift />} />
                <Route path="react-loop" element={<ReactLoop />} />
            </Routes>
        </div>
    );
};

export default Module1;
