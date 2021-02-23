import Ticker from "react-ticker";
import { useState } from "react";

export default function Marquee({ children, speed }) {
  const [isMoving, setIsMoving] = useState(true);

  return (
    <div
      onMouseEnter={() => setIsMoving(false)}
      onMouseLeave={() => setIsMoving(true)}
    >
      <Ticker speed={speed || 5} /*move={isMoving}*/>{children}</Ticker>
    </div>
  );
}
