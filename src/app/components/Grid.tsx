"use client";

export default function Grid() {
  const grid = {
    y: 11,
    x: 8,
  };
  return (
    <div className="grid">
      <div className="lines-wrapper vertical">
        {Array(grid.y)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="line vertical-line"></div>
          ))}
      </div>
      <div className="lines-wrapper horizontal">
        {Array(grid.x)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="line horizontal-line"></div>
          ))}
      </div>
    </div>
  );
}
