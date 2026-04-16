"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export default function BackgroundBoxes() {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    const temp = [];
    const cols = 20;
    const rows = 10;

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        temp.push({ x, y, id: `${x}-${y}` });
      }
    }

    setBoxes(temp);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 flex flex-wrap opacity-10 animate-pulse-slow">
      {boxes.map((box) => (
        <div
          key={box.id}
          className="w-[5vw] h-[5vw] border border-white border-opacity-10"
        />
      ))}
    </div>
  );
}
