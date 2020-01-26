const { PluginLoaderBase } = require('plugnplay');
const sqsSdk = require('aws-sdk-sqs');
module.exports = class FromSqsLoader extends PluginLoaderBase {
    export(options) {
        return sqsSdk.getClient(options.key, options.secret)
            .then(client => {
                return {
                    poll: () => client.poll(),
                    loadMessageById: id => client.load(id)
                };
            });
    }
}