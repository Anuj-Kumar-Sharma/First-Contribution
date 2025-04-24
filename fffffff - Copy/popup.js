// popup.js
document.addEventListener('DOMContentLoaded', () => {
  const timeLeftElement = document.getElementById('timeLeft');
  const statusElement = document.getElementById('status');
  const toggleBtn = document.getElementById('toggleBtn');
  const settingsBtn = document.getElementById('settingsBtn');

  // Update the display
  async function updateDisplay() {
    const { isEnabled, nextNotificationTime } = await chrome.storage.sync.get(['isEnabled', 'nextNotificationTime']);
    
    // Update status
    statusElement.textContent = isEnabled ? 'Active' : 'Paused';
    toggleBtn.textContent = isEnabled ? 'Pause Reminder' : 'Resume Reminder';
    
    // Update time left
    if (isEnabled && nextNotificationTime) {
      const timeLeft = Math.max(0, Math.floor((nextNotificationTime - Date.now()) / 1000));
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timeLeftElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    } else {
      timeLeftElement.textContent = '--:--';
    }
  }

  // Toggle reminder
  toggleBtn.addEventListener('click', async () => {
    const { isEnabled } = await chrome.storage.sync.get('isEnabled');
    await chrome.storage.sync.set({ isEnabled: !isEnabled });
    updateDisplay();
  });

  // Open settings
  settingsBtn.addEventListener('click', () => {
    chrome.runtime.openOptionsPage();
  });

  // Update display every second
  updateDisplay();
  setInterval(updateDisplay, 1000);
}); 