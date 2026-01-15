import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="animate-fade-in">
            <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Engineering Agentic AI Systems</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                    A technical deep-dive into building stateful, reasoning-capable AI agents.
                    Focusing on official architectural patterns, not just concepts.
                </p>
                <Link
                    to="/module1"
                    style={{
                        display: 'inline-block',
                        marginTop: '2rem',
                        padding: '1rem 2rem',
                        background: 'var(--accent-primary)',
                        color: 'var(--bg-primary)',
                        fontWeight: 'bold',
                        borderRadius: '8px',
                        boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)'
                    }}
                >
                    Start Learning →
                </Link>
            </header>

            <section>
                <h2 style={{ marginBottom: '2rem' }}>Course Syllabus</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    <div className="glass-panel">
                        <h3 style={{ color: 'var(--accent-primary)' }}>1. The Agentic Shift</h3>
                        <p>Understand the move from stateless zero-shot models to stateful cognitive architectures. Deep dive into the ReAct loop.</p>
                    </div>

                    <div className="glass-panel">
                        <h3 style={{ color: 'var(--accent-secondary)' }}>2. Core Architecture</h3>
                        <p>The 4 Pillars of a Compound AI System: Profile, Memory (RAG as a tool), Planning, and Tools.</p>
                    </div>

                    <div className="glass-panel">
                        <h3 style={{ color: 'var(--success)' }}>3. The Framework Stack</h3>
                        <p>Technical comparison of LangChain, LangGraph (State Machines), CrewAI (Orchestration), and Google AI SDK.</p>
                    </div>

                    <div className="glass-panel">
                        <h3 style={{ color: 'var(--warning)' }}>4. Design Patterns</h3>
                        <p>Advanced implementations: The Supervisor strategies, Router patterns, and Human-in-the-loop workflows.</p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Home;
