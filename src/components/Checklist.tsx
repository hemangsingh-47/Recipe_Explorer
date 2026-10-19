"use client";

import { useState } from "react";

export default function Checklist({ items }: { items: string[] }) {
  const [done, setDone] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setDone((p) => {
      const n = new Set(p);
      if (n.has(i)) {
        n.delete(i);
      } else {
        n.add(i);
      }
      return n;
    });
  };

  const pct = items.length > 0 ? Math.round((done.size / items.length) * 100) : 0;
  const isComplete = done.size === items.length && items.length > 0;

  return (
    <div className="checklist-container">
      <ul className="checks">
        {items.map((t, i) => {
          const isChecked = done.has(i);
          return (
            <li key={i} className={`check-item ${isChecked ? "is-done" : ""}`}>
              <label className={isChecked ? "done" : ""}>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(i)}
                  aria-label={`Mark ${t} as prepared`}
                />
                <span className="check-text">{t}</span>
              </label>
            </li>
          );
        })}
      </ul>

      <div className="checks-progress">
        <span className="checks-progress-text">
          {done.size} of {items.length} ingredients ready
          {isComplete && <span className="complete-badge">✨ Ready to cook!</span>}
        </span>
        <span className="checks-pct">{pct}%</span>
      </div>
      <div className="checks-bar-bg">
        <div className="checks-bar-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

