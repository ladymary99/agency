import { useEffect } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursor2 = document.querySelector(".cursor2");

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor2.style.left = `${e.clientX}px`;
      cursor2.style.top = `${e.clientY}px`;
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor2"></div>
    </>
  );
}
