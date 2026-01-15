import React from 'react';
import Mermaid from '../../components/Mermaid';

const SupervisorPattern = () => {
    const supervisorFlow = `
    sequenceDiagram
    participant U as User
    participant S as Supervisor
    participant W1 as Worker 1
    participant W2 as Worker 2

    U->>S: "Write a blog & chart data"
    loop Supervision
        S->>S: Decide Next Step
        alt Tasks Pending
            S->>W1: Delegate Task
            W1-->>S: Result
            S->>W2: Delegate Task
            W2-->>S: Result
        else Finished
            S->>U: Final Blog Post
        end
    end
  `;

    return (
        <div className="animate-fade-in">
            <h2>The Supervisor (Router)</h2>
            <p className="intro-text">
                This is the most common pattern for multi-agent systems. A central LLM acts as the traffic controller.
            </p>

            <Mermaid chart={supervisorFlow} />

            <section className="glass-panel" style={{ marginTop: '2rem' }}>
                <h3>How it works</h3>
                <p>
                    The Supervisor is equipped with a special tool: <code>delegate_to_agent(agent_name, task)</code>.
                    Instead of doing the work itself, it constructs a prompt for a specialized sub-agent and calls it like a function.
                </p>
            </section>
        </div>
    );
};

export default SupervisorPattern;
