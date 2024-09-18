"use client"
import React, { useEffect, useRef } from 'react'
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

function VideoPlayer(props) {
  // const vidRef = useRef(null);
  // const handlePlayVideo = () => {
  //   vidRef.current.play();
  // }

  // playVideo = () => {
  //   // You can use the play method as normal on your video ref
  //   vidRef.current.play();
  // };

  // pauseVideo = () => {
  //   // Pause as well
  //   vidRef.current.pause();
  // };

  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const {options, onReady} = props;

  useEffect(() => {

    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode. 
      const videoElement = document.createElement("video-js");

      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready');
        onReady && onReady(player);
      });

    // You could update an existing player in the `else` block here
    // on prop change, for example:
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div className='border-2  border-red-400 rounded-xl focus:outline-none' data-vjs-player>
      <div className={``} ref={videoRef} />
    </div>
  )
}

export default VideoPlayer

// {/* <div>
// <video ref={vidRef} src="https://assets.polestar.com/video/test/polestar-1_09.mp4"
//         type="video/mp4">
//   // {/* <source src="https://" /> */}
// </video>
// <button onClick={handlePlayVideo} type="button">Play</button>

// </div> */}