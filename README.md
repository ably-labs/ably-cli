Ably CLI
=================

<!-- [![ably-cli](https://img.shields.io/badge/ably-cli-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ably-cli.svg)](https://npmjs.org/package/ably-cli)
[![CircleCI](https://circleci.com/gh/ably-labs/ably-cli/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/ably-cli/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/ably-cli.svg)](https://npmjs.org/package/ably-cli)
[![License](https://img.shields.io/npm/l/ably-cli.svg)](https://github.com/ably-labs/ably-cli/blob/main/package.json) -->


## Description

The [Ably](https://ably.com?utm_source=github&utm_medium=github-repo&utm_campaign=GLB-2210-ably-cli&utm_content=ably-cli&src=GLB-2210-ably-cli-github-repo) CLI built on [Oclif](https://oclif.io/).

🚧 This is a **Work in Progress** 🚧 

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
ably-cli/0.0.0 darwin-arm64 node-v19.0.0
$ ably --help [COMMAND]
USAGE
  $ ably COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ably access`](#ably-access)
* [`ably access list`](#ably-access-list)
* [`ably access set`](#ably-access-set)
* [`ably apps create`](#ably-apps-create)
* [`ably apps list`](#ably-apps-list)
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

## `ably access`

Provides instructions for setting up access for the Ably CLI

```
USAGE
  $ ably access [--debug] [--help]

FLAGS
  --debug  Enables debug logging for the CLI
  --help   Show CLI help.

DESCRIPTION
  Provides instructions for setting up access for the Ably CLI

EXAMPLES
  $ ably access
```

_See code: [dist/commands/access/index.ts](https://github.com/ably-labs/ably-cli/blob/v0.0.0/dist/commands/access/index.ts)_

## `ably access list`

Ably CLI access control

```
USAGE
  $ ably access list [--debug] [--help] [--columns <value> | -x] [--sort <value>] [--filter <value>] [--output
    csv|json|yaml |  | [--csv | --no-truncate]] [--no-header | ]

FLAGS
  -x, --extended     show extra columns
  --columns=<value>  only show provided columns (comma-separated)
  --csv              output is csv format [alias: --output=csv]
  --debug            Enables debug logging for the CLI
  --filter=<value>   filter property by partial string matching, ex: name=foo
  --help             Show CLI help.
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen
  --output=<option>  output in a more machine friendly format
                     <options: csv|json|yaml>
  --sort=<value>     property to sort by (prepend '-' for descending)

DESCRIPTION
  Ably CLI access control

EXAMPLES
  $ ably access list
```

## `ably access set`

Update the control key used by the Ably CLI

```
USAGE
  $ ably access set --accountid <value> --accesstoken <value> [--debug] [--help]

FLAGS
  --accesstoken=<value>  (required) The Control API Access Token
  --accountid=<value>    (required) The Account ID
  --debug                Enables debug logging for the CLI
  --help                 Show CLI help.

DESCRIPTION
  Update the control key used by the Ably CLI

EXAMPLES
  $ ably access set --accountid <value> --accesstoken <value>
```

## `ably apps create`

Create an Ably Application

```
USAGE
  $ ably apps create --name <value> [--debug] [--help] [--tlsonly] [--columns <value> | -x] [--sort <value>]
    [--filter <value>] [--output csv|json|yaml |  | [--csv | --no-truncate]] [--no-header | ]

FLAGS
  -x, --extended     show extra columns
  --columns=<value>  only show provided columns (comma-separated)
  --csv              output is csv format [alias: --output=csv]
  --debug            Enables debug logging for the CLI
  --filter=<value>   filter property by partial string matching, ex: name=foo
  --help             Show CLI help.
  --name=<value>     (required) Name of the Ably app
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen
  --output=<option>  output in a more machine friendly format
                     <options: csv|json|yaml>
  --sort=<value>     property to sort by (prepend '-' for descending)
  --tlsonly          Only use TLS connections

DESCRIPTION
  Create an Ably Application

EXAMPLES
  $ ably apps create --name <value> [--tlsonly <value>]
```

## `ably apps list`

List the Ably Applications

```
USAGE
  $ ably apps list [--debug] [--help] [--columns <value> | -x] [--sort <value>] [--filter <value>] [--output
    csv|json|yaml |  | [--csv | --no-truncate]] [--no-header | ]

FLAGS
  -x, --extended     show extra columns
  --columns=<value>  only show provided columns (comma-separated)
  --csv              output is csv format [alias: --output=csv]
  --debug            Enables debug logging for the CLI
  --filter=<value>   filter property by partial string matching, ex: name=foo
  --help             Show CLI help.
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen
  --output=<option>  output in a more machine friendly format
                     <options: csv|json|yaml>
  --sort=<value>     property to sort by (prepend '-' for descending)

DESCRIPTION
  List the Ably Applications

EXAMPLES
  $ ably apps list
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

// TODO

## Building & running locally

### Prerequisites

Node.JS

### Building the project

// TODO: Add step by step instructions for building & running locally.

## Contributing

Want to help contributing to this project? Have a look at our [contributing guide](CONTRIBUTING.md)!

## More info

- [Join our Discord server](https://discord.gg/q89gDHZcBK)
- [Follow us on Twitter](https://twitter.com/ablyrealtime)
- [Use our SDKs](https://github.com/ably/)
- [Visit our website](https://ably.com?utm_source=github&utm_medium=github-repo&utm_campaign=GLB-2210-ably-cli&utm_content=ably-cli&src=GLB-2210-ably-cli-github-repo)

---

## TODOs

1. Update the description of this repo.
2. Add [topics](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics) to this repo to clarify the language, tech stack and use case.
3. ~~Update the [.gitignore](.gitignore) file with one of the [standard templates from GitHub](https://github.com/github/gitignore).~~
4. Update [dependabot.yml](.github/dependabot.yml) with the [configuration for your project](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates).
5. ~~Replace `https://github.com/ably-labs/ably-labs-template-repo/issues` with the actual link of the repo in the [CONTRIBUTING.md](CONTRIBUTING.md) file.~~
6. Update this README so it provides enough information for people to understand how it works, how to run it locally and how it can be deployed to the cloud (see [GitHub](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)).
7. Update the query string in the static asset link:
  - For the logo at the bottom of this README and
  - Please use a custom `favicon` if you're creating a web app. The favicon should use the ably static asset endpoint `<link rel="icon" type="image/svg+xml" href="https://static.ably.dev/motif-red.svg?lorem-ipsum" />` and ensure this uses the same unique identifier as the Ably logo on the README.
  - More info in [this repo](https://github.com/ably-labs/static-assets).
8. Add a GitHub workflow to build/test/deploy your application. Use the [Ably Control API GitHub action](https://github.com/ably-labs/ably-control-api-action) to avoid creating Ably apps/API keys manually (see the `create-infra.yml` workflow in this repo).
9. Add this repository to the [selected repositories in the Ably Labs org](https://github.com/organizations/ably-labs/settings/actions) that are allowed to run GitHub Actions.

---
[![Ably logo](https://static.ably.dev/badge-black.svg?ably-labs-template-repo)](https://?utm_source=github&utm_medium=github-repo&utm_campaign=GLB-2210-ably-cli&utm_content=ably-cli&src=GLB-2210-ably-cli-github-repo)
