import React, { useRef } from 'react'
import './Video.css'
import video from '../../assets/college.mp4'
function VideoPlayer({playState,setPlayState}) {
    const player=useRef(null);
    const closePlayer=(e)=>{
        if(e.targe===player.current){
            setPlayState(false)
        }
    }
  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}> 
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
