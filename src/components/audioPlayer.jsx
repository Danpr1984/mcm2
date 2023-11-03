import React, { useState, useRef, useEffect } from "react";

export default function AudioPlayer({ currentTrack, currentIndex, setCurrentIndex, total, isPlaying, setIsPlaying }) {
    const audioRef = useRef(new Audio());

    useEffect(() => {
        const audioSrc = total[currentIndex]?.track.preview_url;
        if (audioSrc) {
            audioRef.current.src = audioSrc;
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }

        // Cleanup function
        return () => {
            audioRef.current.pause();
            audioRef.current.src = "";
        };
    }, [currentIndex, isPlaying, total]);

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % total.length);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + total.length) % total.length);
    };

    const artists = currentTrack?.album?.artists?.map(artist => artist.name).join(" | ");

    return (
        <div className="player-body flex">
            <div className="player-right-body flex">
                <p className="song-title">{currentTrack?.name}</p>
                <p className="song-artist">{artists}</p>
                <div className="player-right-bottom flex">
                    <button onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ? "Pause" : "Play"}
                    </button>
                    <button onClick={handleNext}>Next</button>
                    <button onClick={handlePrev}>Prev</button>
                </div>
            </div>
        </div>
    );
}