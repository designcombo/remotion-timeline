import { Button } from "@/components/ui/button";
import {
  ACTIVE_CLONE,
  ACTIVE_DELETE,
  ACTIVE_SPLIT,
  TIMELINE_SCALE_CHANGED,
  dispatch
} from "@designcombo/events";
import { frameToTimeString, getCurrentTime, timeToString } from "@/utils/time";
import useStore from "@/store/store";
import {
  Copy,
  SquareSplitHorizontal,
  Trash,
  ZoomIn,
  ZoomOut
} from "lucide-react";
import { getNextZoomLevel, getPreviousZoomLevel } from "@/utils/timeline";
import { useCurrentPlayerFrame } from "@/hooks/use-current-frame";

const Header = () => {
  const { duration, fps, scale, playerRef, activeIds } = useStore();
  const currentFrame = useCurrentPlayerFrame(playerRef!);

  const onZoomOutClick = () => {
    const previousZoom = getPreviousZoomLevel(scale);
    dispatch(TIMELINE_SCALE_CHANGED, {
      payload: {
        scale: previousZoom
      }
    });
  };

  const onZoomInClick = () => {
    const nextZoom = getNextZoomLevel(scale);

    dispatch(TIMELINE_SCALE_CHANGED, {
      payload: {
        scale: nextZoom
      }
    });
  };

  const doActiveClone = () => {
    dispatch(ACTIVE_CLONE);
  };

  const doActiveDelete = () => {
    dispatch(ACTIVE_DELETE);
  };

  const doActiveSplit = () => {
    dispatch(ACTIVE_SPLIT, {
      payload: {},
      options: {
        time: getCurrentTime()
      }
    });
  };

  return (
    <div
      style={{
        position: "relative",
        height: "50px",
        boxShadow: "inset 0 1px 0 0 #27272a",
        flex: "none"
      }}
    >
      <div
        style={{
          position: "absolute",
          height: 50,
          width: "100%"
        }}
      >
        <div
          style={{
            height: 50,
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 200px 1fr",
            alignItems: "center"
          }}
        >
          <div className="px-4">
            <Button
              disabled={!activeIds.length}
              onClick={doActiveDelete}
              variant={"ghost"}
              size={"icon"}
            >
              <Trash size={18} />
            </Button>
            <Button
              disabled={!activeIds.length}
              onClick={doActiveClone}
              variant={"ghost"}
              size={"icon"}
            >
              <Copy size={18} />
            </Button>
            <Button
              disabled={!activeIds.length}
              onClick={doActiveSplit}
              variant={"ghost"}
              size={"icon"}
            >
              <SquareSplitHorizontal size={18} />
            </Button>
          </div>
          <div
            className="text-sm font-light "
            style={{
              display: "grid",
              alignItems: "center",
              gridTemplateColumns: "72px 8px 72px",
              paddingTop: "2px",
              justifyContent: "center"
            }}
          >
            <div
              className="text-zinc-200 font-medium"
              style={{
                display: "flex",
                justifyContent: "center"
              }}
              data-current-time={currentFrame / fps}
              id="video-current-time"
            >
              {frameToTimeString({ frame: currentFrame }, { fps })}
            </div>
            <span>|</span>
            <div
              className="text-zinc-600"
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              {timeToString({ time: duration })}
            </div>
          </div>

          <div className="flex justify-end items-center px-4">
            <Button size={"icon"} variant={"ghost"} onClick={onZoomOutClick}>
              <ZoomOut size={20} />
            </Button>
            <Button size={"icon"} variant={"ghost"} onClick={onZoomInClick}>
              <ZoomIn size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
