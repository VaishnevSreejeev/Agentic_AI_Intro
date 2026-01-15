import React from 'react';

const ReactLoop = () => {
    return (
        <div className="animate-fade-in">
            <h2>The ReAct Pattern</h2>
            <p className="intro-text">
                From the paper <em>"ReAct: Synergizing Reasoning and Acting in Language Models"</em>. This is the official logic flow.
            </p>

            {/* High Fidelity SVG Diagram */}
            <div className="glass-panel" style={{ padding: '3rem', margin: '2rem 0', display: 'flex', justifyContent: 'center', background: '#0f131f' }}>
                <svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#00f0ff" />
                        </marker>
                    </defs>

                    {/* Nodes */}
                    <rect x="50" y="150" width="120" height="60" rx="10" fill="#1e293b" stroke="#00f0ff" strokeWidth="2" />
                    <text x="110" y="185" textAnchor="middle" fill="#fff" fontFamily="Inter" fontSize="16">Thought</text>

                    <rect x="240" y="50" width="120" height="60" rx="10" fill="#1e293b" stroke="#7000ff" strokeWidth="2" />
                    <text x="300" y="85" textAnchor="middle" fill="#fff" fontFamily="Inter" fontSize="16">Action</text>

                    <rect x="430" y="150" width="120" height="60" rx="10" fill="#1e293b" stroke="#00ff9d" strokeWidth="2" />
                    <text x="490" y="185" textAnchor="middle" fill="#fff" fontFamily="Inter" fontSize="16">Observation</text>

                    <rect x="240" y="250" width="120" height="60" rx="10" fill="#1e293b" stroke="#fff" strokeWidth="2" />
                    <text x="300" y="285" textAnchor="middle" fill="#fff" fontFamily="Inter" fontSize="16">Context Update</text>

                    {/* Edges */}
                    <path d="M110 150 Q110 80 230 80" fill="none" stroke="#00f0ff" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <path d="M360 80 Q500 80 490 140" fill="none" stroke="#7000ff" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <path d="M490 210 Q490 280 370 280" fill="none" stroke="#00ff9d" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <path d="M240 280 Q100 280 110 220" fill="none" stroke="#fff" strokeWidth="2" markerEnd="url(#arrowhead)" />

                </svg>
            </div>

            <section>
                <h3>Component Deep Dive</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                    <div className="card" style={{ borderLeft: '3px solid #00f0ff', padding: '1rem', background: 'rgba(0, 240, 255, 0.05)' }}>
                        <h4 style={{ color: '#00f0ff' }}>1. Thought</h4>
                        <p>The model reasoning trace. "I need to find the weather first."</p>
                    </div>
                    <div className="card" style={{ borderLeft: '3px solid #7000ff', padding: '1rem', background: 'rgba(112, 0, 255, 0.05)' }}>
                        <h4 style={{ color: '#7000ff' }}>2. Action</h4>
                        <p>The specific function call generated. <code>weather_api(city="London")</code></p>
                    </div>
                    <div className="card" style={{ borderLeft: '3px solid #00ff9d', padding: '1rem', background: 'rgba(0, 255, 157, 0.05)' }}>
                        <h4 style={{ color: '#00ff9d' }}>3. Observation</h4>
                        <p>The raw return value from the tool execution. <code>"Temp: 15C, Rain: None"</code></p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReactLoop;
