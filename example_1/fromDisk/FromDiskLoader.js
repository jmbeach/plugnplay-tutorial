const { PluginLoaderBase } = require('plugnplay');

module.exports = class FromDiskLoader extends PluginLoaderBase {
    export(options) {
        return Promise.resolve({
            poll: (options) => {
                return require(options.manifesto);
            },
            loadMessageById: (options, id) => {
                return require(id);
            }
        });
    }
}