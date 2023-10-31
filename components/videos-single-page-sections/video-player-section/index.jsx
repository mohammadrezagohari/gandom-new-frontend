"use client"
import VideoPlayer from '@/components/common/video-player'
import { useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

function VideoPlayerSection() {
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: '/پنل مدیریت تستاتو — Mozilla Firefox 2023-09-04 17-37-08.mp4',
      type: 'video/mp4'
    }],
    // poster:"/poster.png"
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };
  return (
    <section className="w-full">
        <div className={`my-10 container h-screen rounded-xl`} >
          <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
    </section>
  )
}

export default VideoPlayerSection