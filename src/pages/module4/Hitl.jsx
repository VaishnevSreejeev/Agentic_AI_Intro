import React from 'react';

const Hitl = () => {
    return (
        <div className="animate-fade-in">
            <h2>Human-in-the-Loop (HITL)</h2>
            <p className="intro-text">
                Autonomous agents are dangerous without oversight. HITL patterns allow the agent to pause and ask for permission before sensitive actions.
            </p>

            <div className="glass-panel" style={{ padding: '3rem', margin: '2rem 0', display: 'flex', justifyContent: 'center', background: '#0f131f' }}>
                <svg width="600" height="200" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <marker id="arrowhead-hitl" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
                        </marker>
                    </defs>

                    {/* Nodes */}
                    <rect x="50" y="70" width="100" height="60" rx="4" fill="#1e293b" stroke="#7000ff" strokeWidth="2" />
                    <text x="100" y="105" textAnchor="middle" fill="#fff">Plan Step</text>

                    <rect x="200" y="70" width="100" height="60" rx="4" fill="#f59e0b" stroke="#fff" strokeWidth="2" />
                    <text x="250" y="105" textAnchor="middle" fill="#000" fontWeight="bold">PAUSE</text>

                    <rect x="350" y="20" width="100" height="60" rx="4" fill="#00ff9d" stroke="#fff" strokeWidth="2" />
                    <text x="400" y="55" textAnchor="middle" fill="#000">Approved</text>

                    <rect x="350" y="120" width="100" height="60" rx="4" fill="#ff0055" stroke="#fff" strokeWidth="2" />
                    <text x="400" y="155" textAnchor="middle" fill="#fff">Rejected</text>

                    <rect x="500" y="70" width="80" height="60" rx="4" fill="#1e293b" stroke="#00f0ff" strokeWidth="2" />
                    <text x="540" y="105" textAnchor="middle" fill="#fff">Execute</text>

                    {/* Edges */}
                    <line x1="150" y1="100" x2="200" y2="100" stroke="#fff" strokeWidth="2" />

                    <path d="M300 100 L350 50" stroke="#00ff9d" strokeWidth="2" markerEnd="url(#arrowhead-hitl)" />
                    <path d="M300 100 L350 150" stroke="#ff0055" strokeWidth="2" markerEnd="url(#arrowhead-hitl)" />

                    <path d="M450 50 L500 80" stroke="#00ff9d" strokeWidth="2" />
                </svg>
            </div>

            <section>
                <h3>Implementation (LangGraph)</h3>
                <p>
                    In LangGraph, this is implemented using <code>interrupt_before=["action_node"]</code>.
                    The graph state freezes, waits for user input (via API), and then resumes with the updated state.
                </p>
            </section>
        </div>
    );
};

export default Hitl;
