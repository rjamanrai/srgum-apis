import React, { FC, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";
import {
  selectPlayerInfo,
  selectPlayerUrl,
  setPlayerInfo,
} from "../../store/player";
import { useGetLiveInfoQuery } from "../../store/player/api";
import styles from "./player.module.css";

interface PlayerProps {
  isLivePlayerPage?: boolean;
}

const Player: FC<PlayerProps> = ({ isLivePlayerPage }: any) => {
  const playerUrl = useSelector(selectPlayerUrl);
  const playerInfo = useSelector(selectPlayerInfo);
  const [isPlayed, setIsPlayed] = useState(false);
  const dispatch = useAppDispatch();
  const player = useRef<HTMLAudioElement>(null);
  const speakerRef = useRef<any>(null);
  const conRef = useRef<any>(null);

  const { data, error, isLoading } = useGetLiveInfoQuery("s");

  useEffect(() => {
    if (!error && !isLoading && data) {
      dispatch(setPlayerInfo(data.nowplaying));
    }
  }, [data, error, isLoading, dispatch]);

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
    <div
      className={
        isLivePlayerPage ? styles.playerBoxWrapperBig : styles.playerBoxWrapper
      }
      ref={conRef}
    >
      <div className={styles.playerBox}>
        <div
          className={
            isLivePlayerPage ? styles.wrapperBorderBig : styles.wrapperBorder
          }
        >
          <div
            className={isLivePlayerPage ? styles.wrapperBig : styles.wrapper}
          >
            <audio src={playerUrl} ref={player} autoPlay />
            <div
              className={isLivePlayerPage ? styles.speakerBig : styles.speaker}
              ref={speakerRef}
            />
            <button
              className={
                isLivePlayerPage ? styles.playButtonBig : styles.playButton
              }
              onClick={onPlay}
            >
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
           {isLivePlayerPage && <div className={styles.infoBox}>
              <p>{playerInfo?.now_playing?.song?.text}</p>
              {playerInfo?.live?.is_live && (
                <p>{playerInfo?.live?.is_live?.streamer_name}</p>
              )}
              <p>Listeners : <b>{playerInfo?.listeners?.total}</b></p> 
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
