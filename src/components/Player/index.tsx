import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectPlayerInfo, selectPlayerUrl } from "../../store/player";
import styles from "./player.module.css";

export default function Player() {
  const playerUrl = useSelector(selectPlayerUrl);
  const playerInfo = useSelector(selectPlayerInfo);
  const [isPlayed, setIsPlayed] = useState(false);

  const player = useRef<HTMLAudioElement>(null);
  const speakerRef = useRef<any>(null);
  const conRef = useRef<any>(null);

  useEffect(() => { 
    setTimeout(onPlay, 500);
  
  }, []);

  const onPlay = () => {
    if (player?.current?.paused) {
      player?.current?.play();
      const speaker = speakerRef.current;
      speaker.classList.add("pop");
      setIsPlayed(true);
    } else {
      player?.current?.pause();
      const speaker = speakerRef.current;
      speaker.classList.remove("pop");
      setIsPlayed(false);
    }
  };

  return (
    <div className={styles.playerBoxWrapper} ref={conRef}>
      <div className={styles.playerBox}>
        <div className={styles.wrapperBorder}>
          <div className={styles.wrapper}>
            <audio src={playerUrl} ref={player} autoPlay />
            <div className={styles.speaker} ref={speakerRef} />
            <button className={styles.playButton} onClick={onPlay}>
              {isPlayed ? (
                <i
                  className="fas fa-pause"
                  style={{ fontSize: 24, color: "#e36526" }}
                />
              ) : (
                <i
                  className="fas fa-play"
                  style={{ fontSize: 24, color: "#e36526" }}
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// {/* {
//             playerInfo && JSON.stringify(playerInfo)
//         } */}
