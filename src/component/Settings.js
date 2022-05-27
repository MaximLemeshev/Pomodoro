import React, { useContext } from "react";
import ReactSlider from "react-slider";
import "../component/slider.css";
import settingsContext from "../context/SettingsContext";
import BackButton from "./BackButton";

export default function Settings() {
  const settingsInfo = useContext(settingsContext);

  return (
    <div style={{ textAlign: "left" }}>
      <label>work: {settingsInfo.workMinutes}:00</label>
      <ReactSlider
        className="slider"
        thumbClassName="thumb"
        trackClassName="track"
        value={settingsInfo.workMinutes}
        onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
        max={120}
        min={1}
      />
      <label>break: {settingsInfo.breakMinutes}:00</label>
      <ReactSlider
        className="slider green"
        thumbClassName="thumb"
        trackClassName="track"
        value={settingsInfo.breakMinutes}
        onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
        max={120}
        min={1}
      />
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <BackButton
          onClick={() => {
            settingsInfo.setShowSettings(true);
          }}
        />
      </div>
    </div>
  );
}
