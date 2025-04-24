// background.js
let timer = null;
let lastCheckTime = 0;

// On install or update: set defaults
chrome.runtime.onInstalled.addListener(async () => {
  const defaults = {
    isEnabled: true,
    interval: 20, // minutes
    message: "Time for an eye break! Look at something 20 feet away for 20 seconds.",
    lastNotificationTime: 0,
    nextNotificationTime: 0
  };
  const stored = await chrome.storage.sync.get(Object.keys(defaults));
  const toSet = {};
  for (let key in defaults) {
    if (stored[key] === undefined) {
      toSet[key] = defaults[key];
    }
  }
  if (Object.keys(toSet).length) {
    await chrome.storage.sync.set(toSet);
  }
  startTimer();
});

// Listen for extension startup
chrome.runtime.onStartup.addListener(() => {
  startTimer();
});

// Start the timer
function startTimer() {
  // Clear any existing timer
  if (timer) {
    clearInterval(timer);
  }

  // Start new timer with more precise timing
  timer = setInterval(async () => {
    try {
      const currentTime = Date.now();
      
      // Only check every 5 seconds to reduce load
      if (currentTime - lastCheckTime < 5000) {
        return;
      }
      lastCheckTime = currentTime;

      const { isEnabled, interval, lastNotificationTime, nextNotificationTime } = await chrome.storage.sync.get(['isEnabled', 'interval', 'lastNotificationTime', 'nextNotificationTime']);
      
      if (isEnabled) {
        // Calculate exact time until next notification
        const timeUntilNextNotification = nextNotificationTime - currentTime;
        
        // If it's time for a notification (within 1 second)
        if (!nextNotificationTime || timeUntilNextNotification <= 1000) {
          // Show notification first
          await showNotification();
          
          // Calculate exact next notification time
          const newNextNotificationTime = currentTime + (interval * 60 * 1000);
          await chrome.storage.sync.set({ 
            lastNotificationTime: currentTime,
            nextNotificationTime: newNextNotificationTime
          });
          
          console.log('Notification shown at exact time:', {
            currentTime,
            nextNotificationTime: newNextNotificationTime,
            interval,
            timeUntilNextNotification
          });
        }
      }
    } catch (error) {
      console.error('Error in timer:', error);
    }
  }, 1000); // Check every second
}

// If user toggles enabled or changes interval, restart timer
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'sync' && (changes.isEnabled || changes.interval)) {
    startTimer();
  }
});

// Helper: show the break notification
async function showNotification() {
  try {
    const { message } = await chrome.storage.sync.get('message');
    
    // Request notification permission if needed
    const permission = await chrome.notifications.getPermissionLevel();
    if (permission !== 'granted') {
      console.log('Requesting notification permission...');
      // You might want to show a message to the user about enabling notifications
      return;
    }

    // Create and show the notification
    const notificationId = await chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icons/icon128.png',
      title: 'Eye Break Reminder',
      message: message,
      priority: 2,
      requireInteraction: true
    });

    if (!notificationId) {
      throw new Error('Failed to create notification');
    }

    console.log('Notification shown successfully with ID:', notificationId);
  } catch (error) {
    console.error('Error showing notification:', error);
  }
}
