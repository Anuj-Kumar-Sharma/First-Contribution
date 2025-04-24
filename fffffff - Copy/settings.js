document.addEventListener('DOMContentLoaded', () => {
  const enabledCheckbox = document.getElementById('enabled');
  const intervalInput = document.getElementById('interval');
  const messageTextarea = document.getElementById('message');
  const saveButton = document.getElementById('save');

  // Load saved settings
  chrome.storage.sync.get(['isEnabled', 'interval', 'message'], (settings) => {
    enabledCheckbox.checked = settings.isEnabled !== false; // Default to true if not set
    intervalInput.value = settings.interval || 20;
    messageTextarea.value = settings.message || "Time for an eye break! Look at something 20 feet away for 20 seconds.";
  });

  // Save settings
  saveButton.addEventListener('click', () => {
    const settings = {
      isEnabled: enabledCheckbox.checked,
      interval: Number(intervalInput.value),
      message: messageTextarea.value
    };

    // Validate interval
    if (settings.interval < 1 || settings.interval > 120) {
      alert('Please enter an interval between 1 and 120 minutes');
      return;
    }

    // Save settings
    chrome.storage.sync.set(settings, () => {
      // Show success message
      const successMessage = document.createElement('div');
      successMessage.textContent = 'Settings saved successfully!';
      successMessage.style.color = 'green';
      successMessage.style.marginTop = '10px';
      document.querySelector('.container').appendChild(successMessage);

      // Remove success message after 2 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 2000);
    });
  });
}); 