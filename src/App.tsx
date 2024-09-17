import {
  ADD_AUDIO,
  ADD_IMAGE,
  ADD_TEXT,
  ADD_VIDEO,
  dispatch
} from "@designcombo/events";
import { Button } from "./components/ui/button";
import { useRef } from "react";
import Timeline from "./components/timeline";
import { generateId } from "@designcombo/timeline";
import { DEFAULT_FONT } from "./constants/font";
import { Player } from "./components/player";
import useStore from "./store/store";
import useTimelineEvents from "./hooks/use-timeline-events";

const App = () => {
  const { playerRef } = useStore();
  useTimelineEvents();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };
  const handleFileUpload = async (files: File[]) => {
    const resourceId = "VMJQit9N0hJaCAss";

    dispatch(ADD_VIDEO, {
      payload: {
        id: resourceId,
        display: {
          from: 2000,
          to: 7000
        },
        details: {
          src: URL.createObjectURL(files[0]),
          name: files[0].name
        },
        metadata: {
          resourceId
        }
      }
    });
  };

  const handleFileChange = (newFiles: File[]) => {
    handleFileUpload(newFiles);
  };

  const handleAddImage = () => {
    dispatch(ADD_IMAGE, {
      payload: {
        id: generateId(),
        details: {
          src: "https://designcombo.imgix.net/images/sample-image.jpg"
        }
      }
    });
  };

  const handleAddVideo = () => {
    const resourceId = "VMJQit9N0hJaCAss";
    dispatch(ADD_VIDEO, {
      payload: {
        id: generateId(),
        details: {
          src: "https://designcombo.imgix.net/videos/sample-video.mp4",
          volume: 50
        },
        metadata: {
          resourceId
        }
      }
    });
  };
  const handleAddAudio = () => {
    dispatch(ADD_AUDIO, {
      payload: {
        id: generateId(),
        details: {
          src: "https://designcombo.imgix.net/audios/stop-in-the-name-of-love.mp3",
          volume: 50
        }
      }
    });
  };

  const handleAddText = () => {
    dispatch(ADD_TEXT, {
      payload: {
        id: generateId(),
        details: {
          text: "Remotion",
          fontSize: 142,
          fontFamily: DEFAULT_FONT.postScriptName,
          fontUrl: DEFAULT_FONT.url,
          width: 400,
          textAlign: "left",
          color: "#ffffff",
          left: 80
        }
      }
    });
  };
  return (
    <div className=" flex flex-col h-screen">
      <div className=" bg-zinc-950 flex-1 flex flex-col items-center justify-center">
        <div className="max-w-3xl flex-1  w-full h-full flex">
          <Player />
        </div>
        <div className="m-auto flex gap-2 py-8">
          <input
            ref={fileInputRef}
            id="file-upload-handle"
            type="file"
            accept="video/*"
            onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
            className="hidden"
          />
          <Button size={"sm"} onClick={handleClick} variant={"secondary"}>
            Upload
          </Button>
          <Button size={"sm"} onClick={handleAddImage} variant={"secondary"}>
            Add Image
          </Button>
          <Button size={"sm"} onClick={handleAddVideo} variant={"secondary"}>
            Add Video
          </Button>
          <Button size={"sm"} onClick={handleAddAudio} variant={"secondary"}>
            Add Audio
          </Button>
          <Button size={"sm"} onClick={handleAddText} variant={"secondary"}>
            Add Text
          </Button>
        </div>
      </div>

      {playerRef && <Timeline />}
    </div>
  );
};

export default App;
