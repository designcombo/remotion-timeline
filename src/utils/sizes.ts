import { ITEM_SIZES } from "@/timeline/constants/sizes";
import { ItemType } from "@/types/combo";

export const getItemHeight = (
  type: ItemType | "helperTop" | "helperBottom" | "helperCenter" | "main"
) => {
  switch (type) {
    case "text":
      return ITEM_SIZES.text;
    case "image":
      return ITEM_SIZES.image;
    case "video":
      return ITEM_SIZES.video;
    case "audio":
      return ITEM_SIZES.audio;
    case "helperTop":
      return 40;
    case "helperBottom":
      return 40;
    case "helperCenter":
      return 8;
    case "main":
      return ITEM_SIZES.main;
    default:
      return ITEM_SIZES.text;
  }
};
