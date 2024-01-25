import { useEffect, useRef } from "react";

export function useVoiceOver(audioFile) {
  const imgElSelect = useRef(null);

  useEffect(
    function () {
      const imgEl = imgElSelect.current;

      function handlePlayAudio() {
        const audio = new Audio(audioFile);
        audio.play();
      }

      imgEl.addEventListener("click", handlePlayAudio);

      return () => {
        imgEl.removeEventListener("click", handlePlayAudio);
      };
    },
    [audioFile]
  );

  return imgElSelect;
}
