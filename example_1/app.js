const config = require('config');
const { PluginManager } = require('plugnplay');

// NOTE: This is not necessary. It just makes the output cleaner when running the demo.
const discoveryOptions = {
    discovery: {
        allowsContributed: true,
        rootPath: '+(fromDisk|fromSQS)'
    }
};

const manager = new PluginManager(discoveryOptions);
const pluginId = config.get('poller.activePlugin');

console.log(`

Plug\`n\`Play Demo
===========
config:
`);

console.log('\tactive plugin: ', pluginId);
const options = config.get(`poller.${pluginId}`);
console.log('\tplugin options: ', options);

manager.discover(discoveryOptions)
    .then(discovered => {
        console.log('\ndiscovered plugins:\n', discovered);
        return manager.instantiate(pluginId, options);
    })
    .then(poller => {
        console.log('\npoller:\n', poller);

        const polled = poller.exports.poll(options);
        console.log('\npolled:\n', polled);
        //...
        const messageById = poller.exports.loadMessageById(options, polled[0]);
        console.log('\nmessageById:\n', messageById, '\n\n');
    });