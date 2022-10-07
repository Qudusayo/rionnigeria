export default function GridLayout({ children, grid }) {
  return (
    <div
      style={{
        display: "grid",
        gap: "1.5em",
        gridTemplateColumns: `repeat(${grid}, 1fr)`,
      }}
    >
      {children}
    </div>
  );
}
