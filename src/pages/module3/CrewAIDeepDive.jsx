import React from 'react';

const CrewAIDeepDive = () => {
    return (
        <div className="animate-fade-in">
            <h2>CrewAI: The Orchestrator</h2>
            <p className="intro-text">
                CrewAI is designed for <strong>Role-Playing</strong>. You define "Agents" with specific personas and "Tasks" for them to solve.
                It abstracts away the complex loops into high-level processes.
            </p>

            <div className="glass-panel" style={{ padding: '2rem', margin: '2rem 0', display: 'flex', justifyContent: 'center', background: '#0f131f' }}>
                <svg width="600" height="350" viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg">
                    {/* Manager */}
                    <rect x="220" y="20" width="160" height="60" rx="30" fill="#f59e0b" stroke="#fff" strokeWidth="2" />
                    <text x="300" y="55" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="16">Manager Agent</text>

                    {/* Workers */}
                    <rect x="50" y="150" width="140" height="80" rx="8" fill="#1e293b" stroke="#00f0ff" strokeWidth="1" />
                    <text x="120" y="180" textAnchor="middle" fill="#00f0ff" fontWeight="bold">Researcher</text>
                    <text x="120" y="210" textAnchor="middle" fill="#a0aec0" fontSize="12">"Search Web"</text>

                    <rect x="230" y="150" width="140" height="80" rx="8" fill="#1e293b" stroke="#00ff9d" strokeWidth="1" />
                    <text x="300" y="180" textAnchor="middle" fill="#00ff9d" fontWeight="bold">Writer</text>
                    <text x="300" y="210" textAnchor="middle" fill="#a0aec0" fontSize="12">"Draft Blog"</text>

                    <rect x="410" y="150" width="140" height="80" rx="8" fill="#1e293b" stroke="#7000ff" strokeWidth="1" />
                    <text x="480" y="180" textAnchor="middle" fill="#7000ff" fontWeight="bold">Editor</text>
                    <text x="480" y="210" textAnchor="middle" fill="#a0aec0" fontSize="12">"Review"</text>

                    {/* Lines */}
                    <line x1="300" y1="80" x2="120" y2="150" stroke="#ffffff" strokeWidth="1" strokeDasharray="5,5" />
                    <line x1="300" y1="80" x2="300" y2="150" stroke="#ffffff" strokeWidth="1" strokeDasharray="5,5" />
                    <line x1="300" y1="80" x2="480" y2="150" stroke="#ffffff" strokeWidth="1" strokeDasharray="5,5" />

                    {/* Output */}
                    <path d="M120 230 L480 230" stroke="#333" strokeWidth="2" />
                    <rect x="200" y="280" width="200" height="40" rx="4" fill="#00f0ff" />
                    <text x="300" y="305" textAnchor="middle" fill="#000" fontWeight="bold">Final Output</text>
                    <line x1="300" y1="230" x2="300" y2="280" stroke="#fff" strokeWidth="2" />

                </svg>
            </div>

            <section>
                <h3>Official Structure</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
                        <h4 style={{ color: '#f59e0b' }}>Agents</h4>
                        <p>Defined by <code>role</code>, <code>goal</code>, and <code>backstory</code>.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
                        <h4 style={{ color: '#00f0ff' }}>Tasks</h4>
                        <p>Specific assignments linked to an agent. Can be <code>async_execution=True</code>.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
                        <h4 style={{ color: '#00ff9d' }}>Process</h4>
                        <p><code>Process.sequential</code> (A&rarr;B&rarr;C) or <code>Process.hierarchical</code> (Manager decides).</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CrewAIDeepDive;
