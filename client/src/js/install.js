const butInstall = document.getElementById('buttonInstall');

// Store the event for later use
let deferredPrompt;

// Logic for installing the PWA
// Event handler for `beforeinstallprompt`
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  window.deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
      return;
  }
  promptEvent.prompt();
  const choiceResult = await promptEvent.userChoice;
  butInstall.classList.toggle('hidden', true);
  window.deferredPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('JATE. was installed.', event);
  butInstall.classList.toggle('hidden', true);
  window.deferredPrompt = null;
});
