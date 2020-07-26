// Checks when the top streamers are live.

// Check only when the DOM has fully loaded.
document.addEventListener('DOMContentLoaded', () => {
    // Global DOM References. (Streamers)
    let jax = document.getElementById("jax"); // Jaxxer On PSO.
    let dream = document.getElementById("dream"); // Dreamcastic Channel.
    let ugb = document.getElementById("ugb"); // William Nash.

    // Global DOM References (Audo).
    let str_alert = document.getElementById("a-str_alert");
    // Link Hover Sound.
    let hover_sound = $("#a-hover_sound")[0];

    // On mouseover, make an auditory select sound.
    $(".r-link, #StarProject, #WatchProject, #CheckUpdates").mouseover(() => {
        // Play Sound.
        hover_sound.play();
        // Sound Volume.
        hover_sound.volume = 0.1;
    });

    // Request the latest streamer data, loop ajax call to continously check for updates.
    setTimeout(() => {
        // Ajax call to check if Jaxxer is streaming.
        $.ajax({
            // Check Jaxxers YouTube channel for updates on his live status.
            url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCU8p3fIw5Ibu5ECdFM5NmNQ&type=video&eventType=live&key=AIzaSyDUMuOdcicifKsObQOHGTL71r5JUADgmGY',
            // We want our data back as a json object so we can traverse it for channel details.
            dataType: 'json',
            // This success variable is populated with our json data from the url.
            success: (response) => {
                // If Jaxxer is live, turn his name in the 'PSO Streamers' list the color 'GREEN'.
                if (jaxLive = response.items[0].snippet.liveBroadcastContent == "live") {
                    // Update the DOM to reflect the current streamer status.
                    jax.style = "color: #34a853;";

                    // Play Alert.
                    str_alert.play();
                    // Sound Volume.
                    str_alert.volume = 0.1;
                }
            }
        });
        // Ajax call to check if Dreamcastic Channel is streaming.
        $.ajax({
            // Check Dreamcastic Channel's YouTube channel for updates on his live status.
            url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=DreamcasticChannel&type=video&eventType=live&key=AIzaSyDUMuOdcicifKsObQOHGTL71r5JUADgmGY',
            // We want our data back as a json object so we can traverse it for channel details.
            dataType: 'json',
            // This success variable is populated with our json data from the url.
            success: (response) => {
                // If Dreamcastic Channel is live, turn his name in the 'PSO Streamers' list the color 'GREEN'.
                if (dreamLive = response.items[0].snippet.liveBroadcastContent == "live") {
                    // Update the DOM to reflect the current streamer status.
                    dream.style = "color: #34a853;";

                    // Play Alert.
                    str_alert.play();
                    // Sound Volume.
                    str_alert.volume = 0.1;
                }
            }
        });
        // Ajax call to check if Gen6Gamer is streaming.
        $.ajax({
            // Check Gen6Gamer's YouTube channel for updates on his live status.
            url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCSsVLwpt3ZUewIuDvyJP10w&type=video&eventType=live&key=AIzaSyDUMuOdcicifKsObQOHGTL71r5JUADgmGY',
            // We want our data back as a json object so we can traverse it for channel details.
            dataType: 'json',
            // This success variable is populated with our json data from the url.
            success: (response) => {
                // If Gen6Gamer is live, turn his name in the 'PSO Streamers' list the color 'GREEN'.
                if (dreamLive = response.items[0].snippet.liveBroadcastContent == "live") {
                    // Update the DOM to reflect the current streamer status.
                    dream.style = "color: #34a853;";

                    // Play Alert.
                    str_alert.play();
                    // Sound Volume.
                    str_alert.volume = 0.1;
                }
            }
        });
        // Ajax call to check if William Nash is streaming.
        $.ajax({
            // Check William Nash's YouTube channel for updates on his live status.
            url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UglyGoblinBoy&type=video&eventType=live&key=AIzaSyDUMuOdcicifKsObQOHGTL71r5JUADgmGY',
            // We want our data back as a json object so we can traverse it for channel details.
            dataType: 'json',
            // This success variable is populated with our json data from the url.
            success: (response) => {
                // If William Nash is live, turn his name in the 'PSO Streamers' list the color 'GREEN'.
                if (ugbLive = response.items[0].snippet.liveBroadcastContent == "live") {
                    // Update the DOM to reflect the current streamer status.
                    ugb.style = "color: #34a853;";

                    // Play Alert.
                    str_alert.play();
                    // Sound Volume.
                    str_alert.volume = 0.1;
                }
            }
        });
    }, 1000); // Ping API every 1 second.
});