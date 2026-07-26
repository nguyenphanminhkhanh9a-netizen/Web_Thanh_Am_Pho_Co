import { useState, useEffect, useRef, useCallback } from 'react';

export function useAudioPlayer(src: string) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(src);
    audioRef.current = audio;

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const onEnd = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      window.dispatchEvent(new CustomEvent('globalAudioState', { detail: { isPlaying: false } }));
    };

    const onPlay = () => {
      setIsPlaying(true);
      window.dispatchEvent(new CustomEvent('globalAudioPlay', { detail: { src } }));
      window.dispatchEvent(new CustomEvent('globalAudioState', { detail: { isPlaying: true } }));
    };

    const onPause = () => {
      setIsPlaying(false);
      window.dispatchEvent(new CustomEvent('globalAudioState', { detail: { isPlaying: false } }));
    };

    // Lắng nghe sự kiện từ các player khác
    const handleGlobalPlay = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail.src !== src) {
        audio.pause();
      }
    };

    window.addEventListener('globalAudioPlay', handleGlobalPlay);

    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', onEnd);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    return () => {
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', onEnd);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      window.removeEventListener('globalAudioPlay', handleGlobalPlay);
      audio.pause();
    };
  }, [src]);

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  }, [isPlaying]);

  const seek = useCallback((time: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  }, []);

  const formatTime = (time: number) => {
    if (isNaN(time)) return '00:00';
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return {
    isPlaying,
    currentTime,
    duration,
    progress,
    togglePlay,
    seek,
    formatTime
  };
}
