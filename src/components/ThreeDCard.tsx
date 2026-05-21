'use client';

import React from 'react';
import { Terminal, Code, Sparkles } from 'lucide-react';

export default function ThreeDCard() {
  return (
    <div className="card-3d-container">
      <div className="card-3d constant-spin">
        {/* Glow behind the card */}
        <div className="card-3d-bg-glow" />

        {/* Glass Reflection / Glare layer */}
        <div className="card-3d-glare" />

        {/* Card Border Highlight (uses preserve-3d) */}
        <div className="card-3d-border" />

        {/* Content Container (holds layout elements) */}
        <div className="card-3d-content-wrapper">
          {/* Central Terminal Icon Box (pops out) */}
          <div className="card-3d-icon-box">
            <Terminal size={52} />
          </div>

          {/* Code Text Box (pops out) */}
          <div className="card-3d-text-box">
            <h3 className="card-3d-title">YP.SOFTWARE</h3>
            <p className="card-3d-sub">Full Stack Wizardry</p>
          </div>
        </div>

        {/* Floating badges (break bounds, pop out at a high Z-depth) */}
        <div className="card-3d-badge card-3d-badge-1">
          <div className="card-3d-badge-inner">
            <Code size={22} style={{ color: 'var(--primary)' }} />
          </div>
        </div>

        <div className="card-3d-badge card-3d-badge-2">
          <div className="card-3d-badge-inner">
            <Sparkles size={22} style={{ color: 'var(--accent)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
