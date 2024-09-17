import useStore from "@/store/store";
import { SequenceItem } from "./sequence-item";

type ItemType = "text" | "image" | "video" | "audio";

const Composition = () => {
  const { trackItemIds, trackItemsMap, fps } = useStore();
  return (
    <>
      {trackItemIds.map((id) => {
        const item = trackItemsMap[id];
        return SequenceItem[item.type as ItemType](item, {
          fps
        });
      })}
    </>
  );
};

export default Composition;
