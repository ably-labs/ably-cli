import CommandWithGlobalConfig from '../command-with-global-config'

export default class List extends CommandWithGlobalConfig {
  static description = 'List the Ably CLI configuration'

  static examples = [
    `$ ably config:list
`,
  ]

  static flags = {
    ...CommandWithGlobalConfig.flags,
  }

  async run(): Promise<void> {
    if (this.globalConfig === undefined) {
      this.log('Configuration not set')
    } else {
      this.log(`Ably CLI configuration:
        controlApiToken: ${this.globalConfig.controlApiToken}
      `)
    }
  }
}
