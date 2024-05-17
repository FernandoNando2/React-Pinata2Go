import React, { useRef } from 'react'
import './Video.css'
import video_shark_tank from '../../assets/video-shark-tank.mp4'

const Video = ({playState,setPlayState}) => {

  const player = useRef(null);
  const closePlayer = (e) => {
    if(e.target === player.current){
        setPlayState(false);
    }

  }

  return (
    <div className={ `video ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
        <video src={video_shark_tank} autoPlay muted controls></video>
    </div>
  )
}

export default Video