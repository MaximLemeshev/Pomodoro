import "./App.css";
import React, { useState } from "react";
import SettingsContext from "./context/SettingsContext";
import Timer from "./component/Timer";
import Settings from "./component/Settings";

function App() {
  const [showSettings, setShowSettings] = useState(true);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <main>
      <SettingsContext.Provider
        value={{
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
          showSettings,
          setShowSettings,
        }}
      >
        {showSettings ? <Timer /> : <Settings />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
