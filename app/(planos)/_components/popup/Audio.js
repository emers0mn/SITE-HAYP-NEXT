'use client'
import React, { useState, useRef } from 'react';

export function AudioPlayer(){
  const audioRef = useRef(null); // Usar useRef para acessar o elemento de áudio
  const [isPlaying, setIsPlaying] = useState(false); // Controlar o estado de reprodução

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div>
      <audio ref={audioRef} src="/img/movel/pedro.mp3" />
      <button onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};
