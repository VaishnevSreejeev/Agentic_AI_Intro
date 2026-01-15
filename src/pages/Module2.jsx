import React from 'react';
import { NavLink, Outlet, Routes, Route, Navigate } from 'react-router-dom';
import ThePillars from './module2/ThePillars';
import RagAsTool from './module2/RagAsTool';

const Module2 = () => {
    return (
        <div className="module-content">
            <h1>Module 2: Core Architecture</h1>

            {/* Tab Navigation */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-glass)' }}>
                <NavLink
                    to="pillars"
                    className={({ isActive }) => isActive ? 'tab-active' : 'tab-inactive'}
                    style={{ padding: '1rem 2rem', textDecoration: 'none', color: 'var(--text-secondary)', borderBottom: '2px solid transparent' }}
                >
                    The 4 Pillars
                </NavLink>
                <NavLink
                    to="rag-tool"
                    className={({ isActive }) => isActive ? 'tab-active' : 'tab-inactive'}
                    style={{ padding: '1rem 2rem', textDecoration: 'none', color: 'var(--text-secondary)', borderBottom: '2px solid transparent' }}
                >
                    RAG as Tool
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
                <Route index element={<Navigate to="pillars" replace />} />
                <Route path="pillars" element={<ThePillars />} />
                <Route path="rag-tool" element={<RagAsTool />} />
            </Routes>
        </div>
    );
};

export default Module2;
