# Plugnplay Example

This example project is based on the [YouTube tutorial](https://www.youtube.com/watch?v=8GuUtXHZvo8&feature=youtu.be) provided by [plugnplay](https://github.com/e0ipso/plugnplay).

## Usage

Open a terminal to `example_1`. Run `yarn install`.

Note the config in [local.yml]('./example_1/config/local.yml). The active plugin can be set to 'disk' or 'sqs'.

    Note: SQS isn't implemented, but changing the config to sqs will show that a different plugin is being loaded.

Run `yarn start` to see the plugin in action.