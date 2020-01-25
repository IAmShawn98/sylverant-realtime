// Sylverant Realtime: A Thing By Shawn Luther 2020 | Project Source: https://github.com/IAmShawn98/sylverant-realtime
// Sylverant Site & Design: Jean-Paul Van Gorder (Credit for creating 'bg.png' and 'seperator.png').
// Sylverant: © 2009 - 2020 Lawrence Sebald (Thank you for approving the use of those two resources ^).
// ---------------------------------------------------------------------------------------------------------------
// This script is executed on page load, injected into only the 'https://sylverant.net/' index page.
// Everything inside this function contains quality of life updates to the sylverant website, as 
// well as the realtime server status integration. Learn more in readme.md or on github.
// ---------------------------------------------------------------------------------------------------------------

(() => {
	// Global DOM Reference Variables.
	const login = document.getElementsByTagName("a")[5]; // Reference to the 'Home' Link.
	const population = document.getElementsByTagName("span")[1]; // Reference to the 'Server Status' Text.
	const refresh = document.getElementsByTagName("a")[11]; // Reference to the refresh button.

	// Overrides the 'Home' link and converts it into the new 'Sylverant Login' for easy access. 
	login.setAttribute("id", "login");
	login.href = "https://wsgi.sylverant.net/login.py";
	login.textContent = "Sylverant Login";

	// Overrides the 'Server Status' Text String into 'PSO Population' because it sounds more user friendly.
	population.setAttribute("id", "server-status-card-name");
	population.textContent = "PSO Population";

	// Attaches an id called 'server-count' to the refresh button, then, clear tne button from visibility.
	// This is done so we can still access its functionality but the user will no longer need to interact
	// with it, so, we just remove it from sight.
	refresh.setAttribute("id", "server-count"); // Attach ID.
	refresh.textContent = " "; // Clear Text String.

	// Ping the DOM for continuous server updates.
	setInterval(() => {
		// Refresh Server Status.
		refresh.click();
	}, 2000); // Repeat this function every two seconds.
})();