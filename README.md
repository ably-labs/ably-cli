Ably CLI
=================

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ably-cli.svg)](https://npmjs.org/package/ably-cli)
[![CircleCI](https://circleci.com/gh/ably-labs/ably-cli/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

// This is a template repository to be used for all Ably Labs demos, tools &amp; proof of concepts. Follow these steps to so this repo is easy to use for visitors & maintainers.

1. Update the description of this repo.
2. Add [topics](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics) to this repo to clarify the language, tech stack and use case.
3. Update the [.gitignore](.gitignore) file with one of the [standard templates from GitHub](https://github.com/github/gitignore).
4. Update [dependabot.yml](.github/dependabot.yml) with the [configuration for your project](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates).
5. Replace `https://github.com/ably-labs/ably-labs-template-repo/issues` with the actual link of the repo in the [CONTRIBUTING.md](CONTRIBUTING.md) file.
6. Update this README so it provides enough information for people to understand how it works, how to run it locally and how it can be deployed to the cloud (see [GitHub](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)).
7. Update the query string in the static asset link:
  - For the logo at the bottom of this README and
  - Please use a custom `favicon` if you're creating a web app. The favicon should use the ably static asset endpoint `<link rel="icon" type="image/svg+xml" href="https://static.ably.dev/motif-red.svg?lorem-ipsum" />` and ensure this uses the same unique identifier as the Ably logo on the README.
  - More info in [this repo](https://github.com/ably-labs/static-assets).
8. Add a GitHub workflow to build/test/deploy your application. Use the [Ably Control API GitHub action](https://github.com/ably-labs/ably-control-api-action) to avoid creating Ably apps/API keys manually (see the `create-infra.yml` workflow in this repo).
9. Add this repository to the [selected repositories in the Ably Labs org](https://github.com/organizations/ably-labs/settings/actions) that are allowed to run GitHub Actions.

Once you're done, remove this section from the README. Good luck! 💪

---

![Place eye candy header image here](https://placekitten.com/640/360)

*// Place eye candy header image here ⬆️*

## Description

// Explanation of the contents of the repository. Describe the use case.

![A high level architecture diagram tells more than a 1000 words](https://placekitten.com/480/240)

*// A high level architecture diagram tells more than a 1000 words ⬆️*

The project uses the following components:

- [X](), brief explanation of the component
- [Y](), brief explanation of the component
- [Ably](https://ably.com/), for realtime messaging at scale.

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ably-cli
$ ably COMMAND
running command...
$ ably (--version)
ably-cli/0.0.0 darwin-arm64 node-v17.4.0
$ ably --help [COMMAND]
USAGE
  $ ably COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ably hello PERSON`](#ably-hello-person)
* [`ably hello world`](#ably-hello-world)
* [`ably help [COMMAND]`](#ably-help-command)
* [`ably plugins`](#ably-plugins)
* [`ably plugins:install PLUGIN...`](#ably-pluginsinstall-plugin)
* [`ably plugins:inspect PLUGIN...`](#ably-pluginsinspect-plugin)
* [`ably plugins:install PLUGIN...`](#ably-pluginsinstall-plugin-1)
* [`ably plugins:link PLUGIN`](#ably-pluginslink-plugin)
* [`ably plugins:uninstall PLUGIN...`](#ably-pluginsuninstall-plugin)
* [`ably plugins:uninstall PLUGIN...`](#ably-pluginsuninstall-plugin-1)
* [`ably plugins:uninstall PLUGIN...`](#ably-pluginsuninstall-plugin-2)
* [`ably plugins update`](#ably-plugins-update)

## `ably hello PERSON`

Say hello

```
USAGE
  $ ably hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/ably-labs/ably-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `ably hello world`

Say hello world

```
USAGE
  $ ably hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ ably hello world
  hello world! (./src/commands/hello/world.ts)
```

## `ably help [COMMAND]`

Display help for ably.

```
USAGE
  $ ably help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for ably.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.15/src/commands/help.ts)_

## `ably plugins`

List installed plugins.

```
USAGE
  $ ably plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ ably plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.4/src/commands/plugins/index.ts)_

## `ably plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ably plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ ably plugins add

EXAMPLES
  $ ably plugins:install myplugin 

  $ ably plugins:install https://github.com/someuser/someplugin

  $ ably plugins:install someuser/someplugin
```

## `ably plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ ably plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ ably plugins:inspect myplugin
```

## `ably plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ably plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ ably plugins add

EXAMPLES
  $ ably plugins:install myplugin 

  $ ably plugins:install https://github.com/someuser/someplugin

  $ ably plugins:install someuser/someplugin
```

## `ably plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ ably plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ ably plugins:link myplugin
```

## `ably plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ably plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ably plugins unlink
  $ ably plugins remove
```

## `ably plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ably plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ably plugins unlink
  $ ably plugins remove
```

## `ably plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ably plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ably plugins unlink
  $ ably plugins remove
```

## `ably plugins update`

Update installed plugins.

```
USAGE
  $ ably plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->

## Tech stack

## Building & running locally

### Prerequisites

1. [Sign up](https://ably.com/signup) or [log in](https://ably.com/login) to ably.com, and [create a new app and copy the API key](https://faqs.ably.com/setting-up-and-managing-api-keys).
2. Install X
3. Install Y

### Building the project

// Add step by step instructions for building & running locally.

## Deploying to the cloud

// Add step by step instructions for deployment. Refer to the GitHub workflow where possible.

## Contributing

Want to help contributing to this project? Have a look at our [contributing guide](CONTRIBUTING.md)!

## More info

// Add links to related blog, video, personal twitter handle.

- [Join our Discord server](https://discord.gg/q89gDHZcBK)
- [Follow us on Twitter](https://twitter.com/ablyrealtime)
- [Use our SDKs](https://github.com/ably/)
- [Visit our website](https://ably.com)

---
[![Ably logo](https://static.ably.dev/badge-black.svg?ably-labs-template-repo)](https://ably.com)