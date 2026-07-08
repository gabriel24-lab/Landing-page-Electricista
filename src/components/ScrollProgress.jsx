import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (documentHeight > 0) {
        const progress = (scrollY / documentHeight) * 100;
        setScrollPercentage(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger initially
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-progress-container">
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
}
