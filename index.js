const config = require("./config")

const query = require("./src/query")
const stdin = require("./src/stdin")

const discord = require("./src/reporter/discord")
const print = require("./src/reporter/print")
const websocket = require("./src/reporter/websocket")

// Gather events from stdin
const serverEvents = stdin()

// Print events to terminal
print(serverEvents, console.log)

// Start websocket server
websocket(serverEvents, config.websocket_port)

// Start discord client
if (!config.debug) {
	discord(config.discord_token,
		config.discord_hook_id,
		config.discord_hook_token,
		query, serverEvents)
}
