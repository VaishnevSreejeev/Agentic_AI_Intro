import React from 'react';

const RagAsTool = () => {
    return (
        <div className="animate-fade-in">
            <h2>RAG: Not Just a Pipeline, But a Tool</h2>
            <p className="intro-text">
                In standard RAG, the retrieval happens <em>before</em> generation every time. In Agentic RAG, retrieval is a <strong>Tool</strong> that the agent
                <em>decides</em> to use only when necessary.
            </p>

            <div className="glass-panel" style={{ padding: '3rem', margin: '2rem 0', display: 'flex', justifyContent: 'center', background: '#0f131f' }}>
                <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <marker id="arrowhead-rag" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#00f0ff" />
                        </marker>
                    </defs>

                    {/* Agent Brain */}
                    <circle cx="100" cy="150" r="50" fill="#1e293b" stroke="#7000ff" strokeWidth="2" />
                    <text x="100" y="155" textAnchor="middle" fill="#fff">Agent</text>

                    {/* Decision Diamond */}
                    <polygon points="250,150 300,100 350,150 300,200" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
                    <text x="300" y="155" textAnchor="middle" fill="#f59e0b" fontSize="12">Need Info?</text>

                    {/* Path Yes -> RAG */}
                    <path d="M300 100 Q300 50 450 50" fill="none" stroke="#00f0ff" strokeWidth="2" markerEnd="url(#arrowhead-rag)" />
                    <text x="350" y="40" fill="#00f0ff">Yes (Call RAG Tool)</text>

                    {/* RAG Box */}
                    <rect x="450" y="20" width="120" height="60" rx="8" fill="#1e293b" stroke="#00f0ff" strokeWidth="2" />
                    <text x="510" y="55" textAnchor="middle" fill="#fff">Vector DB</text>

                    {/* Path No -> Answer */}
                    <path d="M300 200 Q300 250 450 250" fill="none" stroke="#fff" strokeWidth="2" markerEnd="url(#arrowhead-rag)" />
                    <text x="350" y="270" fill="#fff">No (Direct Answer)</text>

                    {/* Answer Box */}
                    <rect x="450" y="220" width="120" height="60" rx="8" fill="#1e293b" stroke="#fff" strokeWidth="2" />
                    <text x="510" y="255" textAnchor="middle" fill="#fff">Output</text>

                    {/* Initial Link */}
                    <line x1="150" y1="150" x2="250" y2="150" stroke="#7000ff" strokeWidth="2" markerEnd="url(#arrowhead-rag)" />

                </svg>
            </div>

            <section>
                <h3>Why this matters</h3>
                <p>
                    Static RAG fails when the query is ambiguous ("What is the latest score?").
                    Agentic RAG allows the model to ask clarifying questions OR search multiple times with different queries.
                </p>
            </section>
        </div>
    );
};

export default RagAsTool;
