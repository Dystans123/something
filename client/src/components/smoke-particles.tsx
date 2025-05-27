export function SmokeParticles() {
  const particles = Array.from({ length: 6 }, (_, i) => (
    <div
      key={i}
      className="smoke-particle"
      style={{
        left: `${10 + i * 15}%`,
        animationDelay: `${-i}s`
      }}
    />
  ));

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles}
    </div>
  );
}
