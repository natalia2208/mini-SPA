export default function ProgressBar({ value, max }) {
  const percent = Math.round((value / max) * 100);
  return (
    <>
      <progress value={value} max={max}></progress>
      <span>{percent}%</span>
    </>
  );
}
