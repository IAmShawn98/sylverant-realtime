// Inject code into 'https://sylverant.net/' when the site has fully loaded.
chrome.tabs.onUpdated.addListener(function (tab) {
	// Inject code into whatever tab is open.
	// Permissions are set to only execute
	// code into Sylverant.
	chrome.tabs.executeScript(tab.ib, {
		file: 'inject.js' // File containing code to inject.
	});
});