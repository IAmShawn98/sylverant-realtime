// --------------------------------------------------------------------------------------------------------------------------------
// - Sylverant Realtime: A Thing By Shawn Luther 2020 | Project Source: https://github.com/IAmShawn98/sylverant-realtime          -
// - Sylverant Site & Design: Jean-Paul Van Gorder (Credit for creating 'bg.png' and 'seperator.png').                            -
// - Sylverant: © 2009 - 2020 Lawrence Sebald (Thank you for approving the use of those two resources ^).                         -
// --------------------------------------------------------------------------------------------------------------------------------

(() => {
	// Global DOM Reference Variables.
	const population = document.getElementsByTagName("span")[1]; // Reference to the 'Server Status' Text.
	const refresh = document.getElementsByTagName("a")[11]; // Reference to the refresh button.

	// All Global Functions.

	// Detachable Server Population.
	function DetachServerStatus() {
		window.open('http://wsgi.sylverant.net/status.py', 'PSO Population', 'height=500, width=230');
	}

	// Overrides the 'Server Status' text and renames it to "PSO Population" because.... I think it sounds better.
	population.setAttribute("id", "server-status-card-name");
	population.style = "cursor: pointer;";
	population.textContent = "PSO Population";

	// Detach the server status tab and drag it anywhere!
	population.addEventListener("click", DetachServerStatus);

	// Attaches an id called 'server-count' to the refresh button so we can manipulate it.
	refresh.setAttribute("id", "server-count"); // Attach ID.
	refresh.style = "text-decoration: none; cursor: auto; color: #ffffff;"; // Turn 'refresh' button into 'plain text'.
	refresh.innerHTML = ""; // Show server status messages.

	// Ping the DOM for continuous server updates.
	setInterval(() => {
		// Re-evaluate the server population.
		refresh.click();
		// Re-evaluate the server status.
		ServerStatus();
	}, 2000); // Repeat this function every two seconds.
})();