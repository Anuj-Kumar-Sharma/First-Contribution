import React, { useState, useEffect } from 'react';
import Timer from './components/Timer';
import Settings from './components/Settings';
import './App.css';

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState({
    isEnabled: true,
    interval: 20,
    message: "Time for an eye break! Look at something 20 feet away for 20 seconds."
  });

  useEffect(() => {
    // Load settings from storage
    chrome.storage.sync.get(['isEnabled', 'interval', 'message'], (result) => {
      if (result.isEnabled !== undefined) {
        setSettings(result);
      }
    });
  }, []);

  const handleSettingsChange = (newSettings) => {
    setSettings(newSettings);
    chrome.storage.sync.set(newSettings);
  };

  return (
    <div className="app">
      <header>
        <img src="icons/eye.png" alt="Eye Break" className="eye-icon" />
        <h1>Eye Break Reminder</h1>
        <button 
          className="settings-button"
          onClick={() => setShowSettings(!showSettings)}
        >
          ⚙️
        </button>
      </header>

      {showSettings ? (
        <Settings 
          settings={settings}
          onSettingsChange={handleSettingsChange}
        />
      ) : (
        <Timer 
          isEnabled={settings.isEnabled}
          interval={settings.interval}
        />
      )}
    </div>
  );
}

export default App; 