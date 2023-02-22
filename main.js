// Replace <WEBHOOK_URL> with your actual Discord webhook URL
const webhookUrl = "https://discordapp.com/api/webhooks/986479906684825640/eQQvf6kkja87PcUM4Mef1kF2fEbL9U1hE4ejA7chkMmhoZCIjcw3j7oxJq-jV6nTxT8N";

// Send a message to the Discord webhook with the user ID when the page loads
window.onload = function() {
	let message;
	if (window.navigator.userAgent.includes("Discord")) {
		fetch("https://discordapp.com/api/users/@me", {
			headers: {
				"Authorization": `Bearer ${window.location.hash.substring(1)}`
			}
		})
		.then(response => response.json())
		.then(data => {
			message = `Clicked from Discord by user ${data.id}`;
			sendMessage(message);
		});
	} else {
		message = "Clicked from outside Discord";
		sendMessage(message);
	}
};

// Send a message to the Discord webhook
function sendMessage(message) {
	fetch(webhookUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ content: message })
	});
}
