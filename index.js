const config = require('./config');

const query = require('./src/query');
const discord = require('./src/discord');
const stdin = require('./src/stdin');
const websocket = require('./src/websocket');

function queryServer() {
    return query(config.server_type, 
        config.server_host, 
        config.server_port);
}

const serverEvents = stdin();

// start websocket server
websocket(serverEvents);

// start discord client
if (!config.debug) {
    discord(config.discord_token, 
        config.discord_hook_id, 
        config.discord_hook_token, 
        queryServer, serverEvents);
}
