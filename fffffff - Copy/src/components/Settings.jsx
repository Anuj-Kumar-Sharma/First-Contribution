import React, { useState } from 'react';
import './Settings.css';

function Settings({ settings, onSettingsChange }) {
  const [localSettings, setLocalSettings] = useState(settings);
  const [showSaved, setShowSaved] = useState(false);

  const handleIntervalChange = (e) => {
    let value = e.target.value;
    
    // Don't allow empty value
    if (value === '') {
      value = '1';
    }

    // Convert to number and clamp between 1 and 60
    const newInterval = Math.min(Math.max(parseInt(value) || 1, 1), 60);
    
    setLocalSettings({
      ...localSettings,
      interval: newInterval
    });

    // Update the input value to show the clamped number
    e.target.value = newInterval.toString();
  };

  const handleMessageChange = (e) => {
    setLocalSettings({
      ...localSettings,
      message: e.target.value
    });
  };

  const handleSave = () => {
    onSettingsChange(localSettings);
    showSaveConfirmation();
  };

  const showSaveConfirmation = () => {
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 2000);
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <img src="icons/settings.png" alt="Settings" className="settings-icon" />
        <h2>Settings</h2>
      </div>
      
      <div className="setting-group">
        <label htmlFor="interval">Break Interval (1-60 minutes):</label>
        <div className="input-with-info">
          <input
            type="number"
            id="interval"
            value={localSettings.interval}
            onChange={handleIntervalChange}
            min="1"
            max="60"
            onBlur={(e) => {
              if (!e.target.value || e.target.value < 1) {
                setLocalSettings({
                  ...localSettings,
                  interval: 1
                });
              }
            }}
          />
          <div className="input-info">Minutes</div>
        </div>
      </div>

      <div className="setting-group">
        <label htmlFor="message">Break Message:</label>
        <textarea
          id="message"
          value={localSettings.message}
          onChange={handleMessageChange}
          rows="3"
        />
      </div>

      <button className="save-button" onClick={handleSave}>
        Save Settings
      </button>

      {showSaved && (
        <div className="save-confirmation">
          ✓ Settings saved successfully!
        </div>
      )}
    </div>
  );
}

export default Settings; 