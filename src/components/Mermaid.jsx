import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
    startOnLoad: true,
    theme: 'dark',
    securityLevel: 'loose',
    themeVariables: {
        fontFamily: 'Inter',
        primaryColor: '#111625',
        primaryTextColor: '#fff',
        primaryBorderColor: '#00f0ff',
        lineColor: '#00f0ff',
        secondaryColor: '#006100',
        tertiaryColor: '#fff'
    }
});

const Mermaid = ({ chart }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            mermaid.contentLoaded();
        }
    }, [chart]);

    return (
        <div className="mermaid" ref={ref} style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '2rem',
            background: 'rgba(0,0,0,0.2)',
            borderRadius: '8px',
            margin: '2rem 0'
        }}>
            {chart}
        </div>
    );
};

export default Mermaid;
