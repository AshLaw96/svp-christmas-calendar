import { useState } from "react";
import "../styles/NightSky.css";

const createStars = () => {
  const count = window.innerWidth < 768 ? 28 : 48;
  return Array.from({ length: count }, (_, id) => {
    const size = Math.floor(Math.random() * 3) + 1;
    return {
      id,
      style: {
        left: `${Math.floor(Math.random() * 100)}vw`,
        top: `${Math.floor(Math.random() * 100)}vh`,
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${Math.floor(Math.random() * 5) + 3}s`,
        animationDelay: `${Math.floor(Math.random() * 6)}s`,
      },
    };
  });
};

const NightSky = () => {
  const [stars] = useState(createStars);

  return (
    <div className="night-sky" aria-hidden="true">
      {stars.map((star) => (
        <span key={star.id} className="star" style={star.style} />
      ))}
    </div>
  );
};

export default NightSky;
