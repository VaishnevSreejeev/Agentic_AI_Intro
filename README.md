# Engineering Agentic AI Systems

A comprehensive, interactive teaching material for Agentic AI, built as a modern React application.
Hosted live at: **[https://VaishnevSreejeev.github.io/Agentic_AI_Intro/](https://VaishnevSreejeev.github.io/Agentic_AI_Intro/)**

## 📚 Course Modules

This project covers the full syllabus for an intermediate Engineering Agentic AI session:

1.  **The Agentic Shift**: Transition from Stateless LLMs to Cyclic Agents (ReAct Loop).
2.  **Core Architecture**: The 4 Pillars (Brain, Tools, Memory/RAG, Planning).
3.  **Framework Stack**: Deep dive into LangChain, LangGraph (State Machines), and CrewAI.
4.  **Design Patterns**: Supervisor/Router patterns and Human-in-the-Loop workflows.

## ✨ Features

*   **Interactive Diagrams**: Live Mermaid.js charts and High-Fidelity SVG architecture visualisations.
*   **Deep Dives**: Nested routing for exploring complex topics like the ReAct loop and Hierarchical Orchestration.
*   **Premium Design**: Glassmorphic UI with a "Deep Space" cyberpunk aesthetic.
*   **Responsive**: Works on desktop and mobile.

## 🛠️ Local Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/VaishnevSreejeev/Agentic_AI_Intro.git
    cd Agentic_AI_Intro
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

## 🚀 Deployment (GitHub Pages)

This project is configured for **GitHub Pages**.

### Method 1: Deploy from Branch (Ready-to-use)
Since the build artifacts are checked into the `main` branch (simplified workflow for this workshop):
1.  Go to **Settings** -> **Pages**.
2.  Select **Source**: `Deploy from a branch`.
3.  Select **Branch**: `main` -> `/root`.
4.  Save.

### Method 2: Build & Deploy Action (Standard)
1.  Run `npm run build`.
2.  Push the `dist` folder to a `gh-pages` branch using the `gh-pages` package:
    ```bash
    npm install gh-pages --save-dev
    # Add "deploy": "gh-pages -d dist" to package.json
    npm run deploy
    ```

*Note: The current configuration supports the `main` branch deployment method out of the box.*
