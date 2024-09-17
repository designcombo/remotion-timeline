import { ITrackItem } from "@designcombo/timeline";
import { AbsoluteFill, Audio, Img, OffthreadVideo, Sequence } from "remotion";

const calculateFrames = (
  display: { from: number; to: number },
  fps: number
) => {
  const from = (display.from / 1000) * fps;
  const durationInFrames = (display.to / 1000) * fps - from;
  return { from, durationInFrames };
};

interface SequenceItemOptions {
  fps: number;
}

type ItemType = "text" | "image" | "video" | "audio";

export const SequenceItem: Record<
  ItemType,
  (item: ITrackItem, options: SequenceItemOptions) => JSX.Element
> = {
  text: (item: ITrackItem, options: SequenceItemOptions) => {
    const { fps } = options;
    const { from, durationInFrames } = calculateFrames(item.display, fps);
    return (
      <Sequence
        key={item.id}
        from={from}
        durationInFrames={durationInFrames}
        data-track-item="transition-element"
        style={{
          position: "absolute",
          width: item?.details?.width || 300,
          height: item?.details?.height || 400,
          transform: item.details?.transform || "none",
          fontSize: item?.details?.fontSize || "16px", // Updated default font size
          textAlign: item?.details?.textAlign || "left", // Updated default text alignment
          top: item?.details?.top || 300,
          left: item?.details?.left || 600,
          color: item?.details?.color || "#000000", // Updated text color (fill)
          backgroundColor: item?.details?.backgroundColor || "transparent", // Updated background color
          border: item?.details?.border || "none", // Updated border
          opacity: item?.details?.opacity! / 100,
          fontFamily: item?.details?.fontFamily || "Arial", // Updated default font family
          textDecoration: item?.details?.textDecoration || "none",
          fontWeight: item?.details?.fontWeight || "normal",
          lineHeight: item?.details?.lineHeight || "normal", // Added line height
          letterSpacing: item?.details?.letterSpacing || "normal", // Added letter spacing
          wordSpacing: item?.details?.wordSpacing || "normal", // Added word spacing
          wordWrap: item?.details?.wordWrap || "normal", //'break-word'
          wordBreak: item?.details?.wordBreak || "normal", //'break-all',
          pointerEvents: "auto"
        }}
      >
        <div>{item.details.text}</div>
      </Sequence>
    );
  },
  image: (item: ITrackItem, options: SequenceItemOptions) => {
    const { fps } = options;
    const { from, durationInFrames } = calculateFrames(item.display, fps);

    return (
      <Sequence
        key={item.id}
        from={from}
        durationInFrames={durationInFrames}
        style={{
          width: item.details.width || "100%", // Default width
          height: item.details.height || "auto", // Default height
          transform: item.details?.transform || "none",
          opacity: item?.details?.opacity! / 100 || 1,
          border: item?.details?.border || "none", // Default border
          borderRadius: item?.details?.borderRadius || "0", // Default border radius
          boxShadow: item?.details?.boxShadow || "none", // Default box shadow
          filter: item.details.filter || "none",
          top: item?.details?.top || 0,
          left: item?.details?.left || 0
        }}
      >
        <AbsoluteFill style={{ pointerEvents: "none" }}>
          <Img
            style={{ pointerEvents: "none" }}
            data-id={item.id}
            src={item.details.src}
          />
        </AbsoluteFill>
      </Sequence>
    );
  },
  video: (item: ITrackItem, options: SequenceItemOptions) => {
    const { fps } = options;
    const { from, durationInFrames } = calculateFrames(item.display, fps);
    const trim = item.trim!;

    // console.log({ item });
    const crop = item.details?.crop || {
      x: 0,
      y: 0,
      width: item.details.width,
      height: item.details.height
    };

    return (
      <Sequence
        premountFor={30 * 5}
        key={item.id}
        from={from}
        durationInFrames={durationInFrames}
        style={{
          width: crop.width || "100%", // Default width
          height: crop.height || "auto", // Default height
          transform: item.details?.transform || "none",
          opacity: item?.details?.opacity! / 100 || 1,
          border: item?.details?.border || "none", // Default border
          borderRadius: item?.details?.borderRadius || "0", // Default border radius
          boxShadow: item?.details?.boxShadow || "none", // Default box shadow
          top: item?.details?.top || 0,
          left: item?.details?.left || 0,
          overflow: "hidden"
        }}
      >
        <AbsoluteFill
          style={{
            pointerEvents: "none",
            width: item.details.width,
            height: item.details.height,
            top: -crop.y,
            left: -crop.x
          }}
        >
          <OffthreadVideo
            startFrom={(trim.from / 1000) * fps}
            endAt={(trim.to / 1000) * fps}
            src={item.details.src!}
            volume={item.details.volume! / 100}
            style={{
              pointerEvents: "none",
              width: item.details.width,
              height: item.details.height
            }}
          />
        </AbsoluteFill>
      </Sequence>
    );
  },
  audio: (item: ITrackItem, options: SequenceItemOptions) => {
    const { fps } = options;
    const { from, durationInFrames } = calculateFrames(item.display, fps);
    const trim = item.trim!;
    return (
      <Sequence
        premountFor={30 * 5}
        className={`moonshine-scene-item id-${item.id} moonshine-scene-item-type-${item.type}`}
        key={item.id}
        from={from}
        durationInFrames={durationInFrames}
        style={{
          userSelect: "none",
          pointerEvents: "none"
        }}
      >
        <AbsoluteFill>
          <Audio
            startFrom={(trim.from / 1000) * fps}
            endAt={(trim.to / 1000) * fps}
            src={item.details.src}
            volume={item.details.volume! / 100}
          />
        </AbsoluteFill>
      </Sequence>
    );
  }
};
