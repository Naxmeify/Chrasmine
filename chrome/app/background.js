chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('app/main.html', {
    'bounds': {
      'width': 1048,
      'height': 600
    }
  });
});

chrome.runtime.onUpdateAvailable.addListener(function(details) {
  console.log("updating to version " + details.version);
  chrome.runtime.reload();
});