import React from 'react';

const ThePillars = () => {
    return (
        <div className="animate-fade-in">
            <h2>The 4 Pillars of Agentic AI</h2>
            <p className="intro-text">
                Lilian Weng (OpenAI) defined the "Agent" system as <strong>LLM + Memory + Planning + Tools</strong>.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', margin: '3rem 0' }}>

                <div className="glass-panel" style={{ borderLeft: '4px solid #7000ff' }}>
                    <h3>1. The Brain (LLM)</h3>
                    <p>The core controller. It must be capable of reasoning and instruction following. Not all LLMs make good agents.</p>
                </div>

                <div className="glass-panel" style={{ borderLeft: '4px solid #00f0ff' }}>
                    <h3>2. Tool Use</h3>
                    <p>The ability to call external APIs for missing information. This extends the model's capabilities beyond its training data.</p>
                </div>

                <div className="glass-panel" style={{ borderLeft: '4px solid #00ff9d' }}>
                    <h3>3. Memory</h3>
                    <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                        <li><strong>Short-term:</strong> In-context learning (Chat History).</li>
                        <li><strong>Long-term:</strong> Vector Database (Recall).</li>
                    </ul>
                </div>

                <div className="glass-panel" style={{ borderLeft: '4px solid #f59e0b' }}>
                    <h3>4. Planning</h3>
                    <p><strong>Decomposition:</strong> Breaking big goals into smaller steps.</p>
                    <p><strong>Reflection:</strong> Reviewing past actions to improve future ones.</p>
                </div>

            </div>
        </div>
    );
};

export default ThePillars;
