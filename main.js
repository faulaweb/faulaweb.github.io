const webhookUrl = "https://discordapp.com/api/webhooks/986479906684825640/eQQvf6kkja87PcUM4Mef1kF2fEbL9U1hE4ejA7chkMmhoZCIjcw3j7oxJq-jV6nTxT8N";

		// Send a message to the Discord webhook when the page loads
		window.onload = function() {
			let message;
			if (window.navigator.userAgent.includes("Discord")) {
				message = "Clicked from Discord";
			} else {
				message = "Clicked from outside Discord";
			}

			fetch(webhookUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ content: message })
			});
		}
(function() {
	if (window.navigator.userAgent.includes("Discord")) {
		const link = document.createElement("a");
		link.href = "discord://open";
		document.body.appendChild(link);
		link.click();
	}
})();