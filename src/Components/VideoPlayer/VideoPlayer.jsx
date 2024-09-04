import React,{useRef} from 'react'
import "./VideoPlayer.css";
import video from "../../Assets/College.mp4";

const VideoPlayer = ({playstate,setplayState}) => {

  const player=useRef(null);
  
  const closeplayer = (e) =>{
    if(e.target === player.current)setplayState(false);
  }
  return (
    <div className={`video-player ${playstate?'':'hide'}`} ref={player} onClick={closeplayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer