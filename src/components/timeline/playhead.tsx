import { useCurrentPlayerFrame } from "@/hooks/use-current-frame";
import useStore from "@/store/store";
import { timeMsToUnits, unitsToTimeMs } from "@designcombo/timeline";
import { useEffect, useRef, useState } from "react";

const Playhead = ({ scrollLeft }: { scrollLeft: number }) => {
  const playheadRef = useRef<HTMLDivElement>(null);
  const { playerRef, fps, scale } = useStore();
  const currentFrame = useCurrentPlayerFrame(playerRef!);
  const position =
    timeMsToUnits((currentFrame / fps) * 1000, scale.zoom) - scrollLeft;
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartPosition, setDragStartPosition] = useState(position);

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseDown = (e: any) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragStartPosition(position);
  };

  const handleMouseMove = (e: any) => {
    if (isDragging) {
      const delta = e.clientX - dragStartX;
      const newPosition = dragStartPosition + delta;

      const time = unitsToTimeMs(newPosition, scale.zoom);
      playerRef?.current?.seekTo((time * fps) / 1000);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={playheadRef}
      onMouseDown={handleMouseDown}
      style={{
        position: "absolute",
        left: 40 + position,
        top: 50,
        width: 1,
        height: "calc(100% - 50px)",
        background: "#d4d4d8",
        zIndex: 10,
        cursor: "pointer"
      }}
    >
      <div className="relative h-full">
        <div className="absolute top-0  transform -translate-x-1/2 w-3 h-full "></div>
        <div
          style={{
            borderRadius: "0 0 20px 20px"
          }}
          className="absolute transform -translate-x-1/2 px-1.5 h-5 bg-white"
        ></div>
      </div>
    </div>
  );
};

export default Playhead;
