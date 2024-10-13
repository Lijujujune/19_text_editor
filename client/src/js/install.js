const butInstall = document.getElementById('buttonInstall');

// Store the event for later use
let deferredPrompt;

// Logic for installing the PWA
// Event handler for `beforeinstallprompt`
window.addEventListener('beforeinstallprompt', (event) => {
  console.log('beforeinstallprompt event fired');

  // Prevent the default behavior of the event
  event.preventDefault();

  // Save the event so it can be triggered later
  deferredPrompt = event;

  // Unhide the install button
  butInstall.style.display = 'block';
});

// Click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  console.log('Install button clicked');

  if (!deferredPrompt) {
    return;
  }

  // Show the install prompt
  deferredPrompt.prompt();

  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;
  console.log(`User response to the install prompt: ${outcome}`);

  // Clear the deferred prompt since it can only be used once
  deferredPrompt = null;

  // Hide the install button after installation prompt is shown
  butInstall.style.display = 'none';
});

// Event handler for `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('PWA was installed');
  // Optionally, you can hide the install button
  butInstall.style.display = 'none';
});
