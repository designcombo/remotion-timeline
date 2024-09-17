import { IDesign } from "@/types/combo";
import CanvasTimeline, {
  ITimelineScaleState,
  ITimelineScrollState,
  ITrack,
  ITrackItem,
  ITransition
} from "@designcombo/timeline";
import { PlayerRef } from "@remotion/player";
import { create } from "zustand";

interface ITimelineStore {
  duration: number;
  fps: number;
  scale: ITimelineScaleState;
  scroll: ITimelineScrollState;

  tracks: ITrack[];
  trackItemIds: string[];
  transitionIds: string[];
  transitionsMap: Record<string, ITransition>;
  trackItemsMap: Record<string, ITrackItem>;

  timeline: CanvasTimeline | null;
  setTimeline: (timeline: CanvasTimeline) => void;
  setScale: (scale: ITimelineScaleState) => void;
  setScroll: (scroll: ITimelineScrollState) => void;
  playerRef: React.RefObject<PlayerRef> | null;
  setPlayerRef: (playerRef: React.RefObject<PlayerRef> | null) => void;

  setState: (state: IDesign) => Promise<void>;
}

const useStore = create<ITimelineStore>((set) => ({
  timeline: null,
  duration: 30000,
  fps: 30,
  scale: {
    unit: 60,
    zoom: 1 / 90,
    segments: 5
  },
  scroll: {
    left: 0,
    top: 0
  },
  playerRef: null,

  activeIds: [],
  targetIds: [],
  tracks: [],
  trackItemIds: [],
  transitionIds: [],
  transitionsMap: {},
  trackItemsMap: {},

  setTimeline: (timeline: CanvasTimeline) =>
    set((state) => ({
      timeline: timeline
    })),
  setScale: (scale: ITimelineScaleState) =>
    set((state) => ({
      scale: scale
    })),
  setScroll: (scroll: ITimelineScrollState) =>
    set((state) => ({
      scroll: scroll
    })),
  setState: async (state) => {
    return set({ ...state });
  },
  setPlayerRef: (playerRef: React.RefObject<PlayerRef> | null) =>
    set({ playerRef })
}));

export default useStore;
