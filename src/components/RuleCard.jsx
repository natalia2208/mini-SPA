import { useState } from "react";

export default function RuleCard({ rule, onToggle }) {
  const [compliant, setCompliant] = useState(false);

  function toggle() {
    const next = !compliant;
    setCompliant(next);
    onToggle(rule.id, next);
  }

  return (
    <div className="rule-card">
      <h3>{rule.title}</h3>
      <small>{rule.category}</small>
      <p>{rule.description}</p>
      <button aria-pressed={compliant} onClick={toggle}>
        {compliant ? "Echo ✅" : "Pendiente"}
      </button>
    </div>
  );
}
