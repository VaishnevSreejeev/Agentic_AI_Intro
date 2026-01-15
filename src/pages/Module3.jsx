import React from 'react';
import { NavLink, Outlet, Routes, Route, Navigate } from 'react-router-dom';
import LangGraphDeepDive from './module3/LangGraphDeepDive';
import CrewAIDeepDive from './module3/CrewAIDeepDive';

const Module3 = () => {
    return (
        <div className="module-content">
            <h1>Module 3: The Framework Stack</h1>

            {/* Tab Navigation */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-glass)' }}>
                <NavLink
                    to="langgraph"
                    className={({ isActive }) => isActive ? 'tab-active' : 'tab-inactive'}
                    style={{ padding: '1rem 2rem', textDecoration: 'none', color: 'var(--text-secondary)', borderBottom: '2px solid transparent' }}
                >
                    LangGraph
                </NavLink>
                <NavLink
                    to="crewai"
                    className={({ isActive }) => isActive ? 'tab-active' : 'tab-inactive'}
                    style={{ padding: '1rem 2rem', textDecoration: 'none', color: 'var(--text-secondary)', borderBottom: '2px solid transparent' }}
                >
                    CrewAI
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
                <Route index element={<Navigate to="langgraph" replace />} />
                <Route path="langgraph" element={<LangGraphDeepDive />} />
                <Route path="crewai" element={<CrewAIDeepDive />} />
            </Routes>
        </div>
    );
};

export default Module3;
