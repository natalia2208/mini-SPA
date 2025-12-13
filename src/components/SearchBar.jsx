export default function SearchBar({ value, onChange }) {
  return (
    <>
      <label htmlFor="search">Buscar normas</label>
      <input
        id="search"
        type="search"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </>
  );
}
