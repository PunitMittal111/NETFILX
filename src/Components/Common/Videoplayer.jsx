import React, { useRef, useState } from "react";
import videoSrc from "../../Components/video.mp4"; // Adjust the path as needed
import {
  FaBackward,
  FaPlay,
  FaPause,
  FaForward,
  FaVolumeMute,
  FaVolumeUp,
  FaExpand,
  FaCompress,
} from "react-icons/fa";

const CustomVideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const handleForward = () => {
    videoRef.current.currentTime += 10;
  };

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleBackward = () => {
    videoRef.current.currentTime -= 10;
  };

  const handleSeek = (event) => {
    const newTime = (event.target.value * duration) / 100;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleMuteToggle = () => {
    const video = videoRef.current;
    setIsMuted(!isMuted);
    video.muted = !isMuted;
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch((err) => {
        console.error("Error exiting fullscreen:", err);
      });
    } else {
      videoRef.current.requestFullscreen().catch((err) => {
        console.error("Error entering fullscreen:", err);
      });
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div
      className={`relative bg-black  rounded-lg overflow-hidden  ${
        isFullscreen ? "fullscreen" : ""
      }`}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        className=" w-screen h-full "
        onClick={togglePlayPause}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />

      <div className="absolute bottom-0 left-0 w-full flex items-center justify-between p-2 bg-black bg-opacity-60 text-white">
        <button onClick={handleBackward} className="px-2 py-1">
          <FaBackward className="text-red-500 h-6 w-6" />
        </button>
        <button onClick={togglePlayPause} className="px-4 py-2">
          {isPlaying ? (
            <FaPause className="text-red-500 h-6 w-6" />
          ) : (
            <FaPlay className="text-red-500 h-6 w-6" />
          )}
        </button>
        <button onClick={handleForward} className="px-2 py-1">
          <FaForward className="text-red-500 h-6 w-6" />
        </button>
        <input
          type="range"
          min="0"
          max="100"
          value={(currentTime / duration) * 100}
          onChange={handleSeek}
          className="flex-1 mx-2"
        />
        <span>
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>{" "}
        <button
          onClick={handleMuteToggle}
          className="text-red-500 hover:text-red-700 p-2 rounded-full"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <FaVolumeMute className="text-2xl" />
          ) : (
            <FaVolumeUp className="text-2xl" />
          )}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-14"
        />
        {/* <div className=" flex flex-col items-center gap-8 w-10 py-4  border border-white ">
          <div
            style={{
              transform: "rotate(-90deg)",
            }}
          >
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-16 "
            />
          </div>

          <button
            onClick={handleMuteToggle}
            className="text-red-500 hover:text-red-700 rounded-full "
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <FaVolumeMute className="text-2xl" />
            ) : (
              <FaVolumeUp className="text-2xl" />
            )}
          </button>
        </div> */}
        <button onClick={toggleFullscreen} className="px-2 py-1">
          {isFullscreen ? (
            <FaCompress className="text-red-500 h-6 w-6" />
          ) : (
            <FaExpand className="text-red-500 h-6 w-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
