export default function CategoryFilter({ categories, value, onChange }) {
  return (
    <>
      <label>Filtrar por categoría</label>
      <select value={value} onChange={e => onChange(e.target.value)}>
        <option value="">Todas</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </>
  );
}
