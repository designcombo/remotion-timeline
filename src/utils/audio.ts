export const getAudioInfo = (src: string): Promise<{ duration: number }> => {
  return new Promise((resolve, reject) => {
    const audio = new Audio();
    // audio.crossOrigin = "anonymous"; // Enable cross-origin access if audio is hosted elsewhere
    audio.preload = "auto";

    audio.addEventListener("loadedmetadata", () => {
      const duration = audio.duration * 1000;

      resolve({ duration });
    });

    audio.addEventListener("error", (error) => {
      reject(error);
    });

    audio.src = src;
    audio.crossOrigin = "anonymous";
    audio.load();
  });
};
