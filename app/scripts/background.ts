// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

chrome.runtime.onInstalled.addListener((details) => {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({
  text: `やっほー`
});

console.log(`yes!`);
