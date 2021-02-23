import Ticker from "react-ticker";
import { useState } from "react";

export default function Marquee({ children, speed }) {
  const [isMoving, setIsMoving] = useState(true);

  return (
    <div
      onMouseEnter={() => setIsMoving(false)}
      onMouseLeave={() => setIsMoving(true)}
    >
      <Ticker
        speed={speed || 5}
        offset={80}
        /*move={isMoving}*/
      >
        {() => <div className="">{children}</div>}
      </Ticker>
    </div>
  );
}
