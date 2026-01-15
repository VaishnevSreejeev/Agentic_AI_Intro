import React from 'react';

const TheShift = () => {
    return (
        <div className="animate-fade-in">
            <h2>The Shift: From Generators to Agents</h2>
            <p className="intro-text">
                Understanding why "chatbots" differ from "agents" requires looking at their statefulness and interaction loop.
            </p>

            <div className="diagram-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', margin: '3rem 0' }}>

                {/* Visual: Stateless */}
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#a0aec0' }}>Standard LLM (Stateless)</div>
                    <div className="visual-box" style={{
                        position: 'relative', height: '300px', border: '2px dashed #a0aec0', borderRadius: '16px',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <div className="node" style={{ background: '#2d3748', padding: '1rem', borderRadius: '8px' }}>Input</div>
                        <div style={{ height: '40px', width: '2px', background: '#a0aec0' }}></div>
                        <div className="node brain" style={{ background: '#4a5568', padding: '1.5rem', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>LLM</div>
                        <div style={{ height: '40px', width: '2px', background: '#a0aec0' }}></div>
                        <div className="node" style={{ background: '#2d3748', padding: '1rem', borderRadius: '8px' }}>Output</div>
                    </div>
                </div>

                {/* Visual: Stateful Agent */}
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#00f0ff' }}>Agentic System (Stateful)</div>
                    <div className="visual-box" style={{
                        position: 'relative', height: '300px', border: '2px solid #00f0ff', borderRadius: '16px',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        background: 'rgba(0, 240, 255, 0.05)'
                    }}>
                        <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
                            <span style={{ fontSize: '2rem' }}>🔄</span>
                        </div>
                        <div className="cycle-container">
                            <div className="step" style={{ color: '#00f0ff', fontWeight: 'bold' }}>Reasoning</div>
                            <div style={{ fontSize: '1.5rem' }}>⬇️</div>
                            <div className="step" style={{ color: '#7000ff', fontWeight: 'bold' }}>Action (Tool Use)</div>
                            <div style={{ fontSize: '1.5rem' }}>⬇️</div>
                            <div className="step" style={{ color: '#00ff9d', fontWeight: 'bold' }}>Observation</div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="glass-panel">
                <h3>Key Concept: The Feedback Loop</h3>
                <p>
                    A standard LLM is a <strong>Directed Acyclic Graph (DAG)</strong>—it goes one way. An Agent is a <strong>Cyclic Graph</strong>.
                    It can feed its own output back into itself as a new input (Observation), allowing it to self-correct and iterate.
                </p>
            </section>
        </div>
    );
};

export default TheShift;
