import React, { useRef, useEffect } from "react";

function AudioPlayer({ track, isPlaying, onPlay }) {
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.src = track.preview_url;
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [track, isPlaying]);

  return (
    <audio className="audio-player" ref={audioRef} onPlay={onPlay} controls />
  );
}

export default AudioPlayer;
