import React, { useContext } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import settingsContext from "../context/SettingsContext";
import PauseButton from "./PauseButton";
import PlayButton from "./PlayButton";
import SettingsButton from "./SettingsButton";

const red = "#f54e4e";
// const green = "#4aec8c";

export default function Timer() {
  const settingsInfo = useContext(settingsContext);

  return (
    <div>
      <CircularProgressbar
        value={60}
        text={`60%`}
        styles={buildStyles({
          pathColor: red,
          textColor: "#fff",
          trailColor: "rgba(255,255,255,.2)",
        })}
      />
      <div style={{ marginTop: "20px" }}>
        <PlayButton />
        <PauseButton />
      </div>
      <div style={{ marginTop: "20px" }}>
        <SettingsButton
          onClick={() => {
            settingsInfo.setShowSettings(false);
          }}
        />
      </div>
    </div>
  );
}
