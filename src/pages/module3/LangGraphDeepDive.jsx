import React from 'react';

const LangGraphDeepDive = () => {
    return (
        <div className="animate-fade-in">
            <h2>LangGraph: The State Machine</h2>
            <p className="intro-text">
                LangGraph allows you to model your agent as a <strong>graph</strong> where nodes are actions and edges are decisions.
                This is critical for loops ("try again if error") which linear chains cannot handle well.
            </p>

            <div className="glass-panel" style={{ padding: '3rem', margin: '2rem 0', display: 'flex', justifyContent: 'center', background: '#0f131f' }}>
                <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <marker id="arrowhead-lg" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#7000ff" />
                        </marker>
                    </defs>

                    {/* Nodes */}
                    <circle cx="100" cy="150" r="40" fill="#1e293b" stroke="#7000ff" strokeWidth="2" />
                    <text x="100" y="155" textAnchor="middle" fill="#fff" fontSize="12">Start</text>

                    <rect x="250" y="120" width="120" height="60" rx="4" fill="#1e293b" stroke="#00f0ff" strokeWidth="2" />
                    <text x="310" y="155" textAnchor="middle" fill="#fff" fontSize="14">Agent Node</text>

                    <rect x="450" y="50" width="100" height="50" rx="4" fill="#1e293b" stroke="#00ff9d" strokeWidth="2" />
                    <text x="500" y="80" textAnchor="middle" fill="#fff" fontSize="14">Tool Node</text>

                    <circle cx="500" cy="220" r="30" fill="#1e293b" stroke="#ff0055" strokeWidth="2" />
                    <text x="500" y="225" textAnchor="middle" fill="#fff" fontSize="12">End</text>

                    {/* Edges */}
                    <path d="M140 150 L250 150" stroke="#7000ff" strokeWidth="2" markerEnd="url(#arrowhead-lg)" />

                    {/* Loop Logic */}
                    <path d="M310 120 Q310 80 450 80" stroke="#00f0ff" strokeWidth="2" strokeDasharray="5,5" />
                    <text x="350" y="70" fill="#00f0ff" fontSize="12">Call Tool</text>

                    <path d="M450 100 Q400 120 370 140" stroke="#00ff9d" strokeWidth="2" markerEnd="url(#arrowhead-lg)" />
                    <text x="420" y="130" fill="#00ff9d" fontSize="12">Result</text>

                    <path d="M310 180 L500 190" stroke="#ff0055" strokeWidth="2" markerEnd="url(#arrowhead-lg)" />
                    <text x="400" y="200" fill="#ff0055" fontSize="12">Finish</text>
                </svg>
            </div>

            <section>
                <h3>Official Concepts</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '1rem', padding: '1rem', borderLeft: '2px solid #7000ff', background: 'rgba(112,0,255,0.05)' }}>
                        <strong>State:</strong> A type-safe dictionary (TypedDict) that holds the context. <br />
                        <code>{`class State(TypedDict): messages: list[str]`}</code>
                    </li>
                    <li style={{ marginBottom: '1rem', padding: '1rem', borderLeft: '2px solid #00f0ff', background: 'rgba(0,240,255,0.05)' }}>
                        <strong>Nodes:</strong> Regular Python functions that receive the current state and return an update.
                    </li>
                    <li style={{ marginBottom: '1rem', padding: '1rem', borderLeft: '2px solid #00ff9d', background: 'rgba(0,255,157,0.05)' }}>
                        <strong>Conditional Edges:</strong> The "Routing" logic. <br />
                        <code>{`workflow.add_conditional_edges("agent", should_continue)`}</code>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default LangGraphDeepDive;
