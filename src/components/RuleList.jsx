import RuleCard from "./RuleCard";

export default function RuleList({ rules, onToggle }) {
  if (!rules.length) return <p>No hay resultados</p>;

  return rules.map(rule => (
    <RuleCard key={rule.id} rule={rule} onToggle={onToggle} />
  ));
}
