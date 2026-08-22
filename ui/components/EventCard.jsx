"use client";
import React, { useRef, useState } from "react";
import Title from "./Title";
import Image from "next/image";

export default function EventCard({
  imageSrc,
  videoSrc,
  title,
  paragraph,
  name1,
  name2,
  name3,
  name4,
}) {
  // 1. Set initial state to false so the image/play-button shows first
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = (e) => {
    e.stopPropagation(); // Prevents bubbling issues
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePauseOrEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="group w-full cursor-pointer sticky top-10 bg-[#1e1e1e]">
      <div className="w-full h-[400px] xl:h-[500px] 2xl:h-[650px] relative overflow-hidden bg-black">
        {/* Thumbnail Image */}
        <Image
          src={imageSrc}
          alt="thumb"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Text Labels Overlay (Only visible when video is NOT playing) */}
        {!isPlaying && (
          <div className="w-full h-full absolute top-0 left-0 bg-black/10 z-20 pointer-events-none">
            {name1 && (
              <p className="text-white text-[20px] xl:text-[32px] capitalize absolute top-10 left-10">
                {name1}
              </p>
            )}
            {name2 && (
              <p className="text-white text-[20px] xl:text-[32px] capitalize absolute top-10 right-10">
                {name2}
              </p>
            )}
            {name3 && (
              <p className="text-white text-[20px] xl:text-[32px] capitalize absolute bottom-10 left-10">
                {name3}
              </p>
            )}
            {name4 && (
              <p className="text-white text-[20px] xl:text-[32px] capitalize absolute bottom-10 right-10">
                {name4}
              </p>
            )}
          </div>
        )}

        {/* 3. Play Button Hover Layer */}
        {!isPlaying && (
          <div
            onClick={handlePlay}
            className="w-full h-full absolute top-0 left-0 bg-black/30 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 center-center z-30 cursor-pointer"
          >
            <div className="w-24 h-24 center-center bg-black/60 text-white rounded-full font-thin transform scale-95 group-hover:scale-100 transition-transform duration-300">
              Play
            </div>
          </div>
        )}

        {/* 4. Video Player Layer */}
        <div
          className={`${isPlaying ? "block" : "hidden"} w-full h-full bg-black absolute top-0 left-0 z-40`}
        >
          <video
            ref={videoRef}
            width="100%"
            height="100%"
            className="w-full h-full object-cover"
            src={videoSrc}
            controls
            onPause={handlePauseOrEnded}
            onEnded={handlePauseOrEnded}
          >
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Description Section */}
      <div className="flex flex-col gap-1 pt-8!">
        <Title title={title} />
        <p className="text-white text-[24px] xl:text-[32px]">{paragraph}</p>
      </div>
    </div>
  );
}
