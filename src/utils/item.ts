import { ITrack } from "@designcombo/timeline";

// Function to remove specified items from the tracks array
export function removeItemsFromTrack(
  tracks: ITrack[],
  itemsToRemove: string[]
): ITrack[] {
  return tracks.map((track) => ({
    ...track,
    items: track.items.filter((item) => !itemsToRemove.includes(item))
  }));
}
