export const getVideoInfo = (
  src: string
): Promise<{ duration: number; width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    // video.crossOrigin = "anonymous"; // Enable cross-origin access if video is hosted elsewhere
    video.preload = "auto";

    video.addEventListener("loadedmetadata", () => {
      const duration = video.duration * 1000;
      const width = video.videoWidth;
      const height = video.videoHeight;

      resolve({ duration, width, height });
    });

    video.addEventListener("error", (error) => {
      reject(error);
    });

    video.src = src;
    video.load();
  });
};
