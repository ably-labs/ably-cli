import CommandWithGlobalConfig from '../command-with-global-config'

export default class List extends CommandWithGlobalConfig {
  static description = 'List the Ably Applications'

  static examples = [
    `$ ably apps:list
`,
  ]

  static flags = {
    ...CommandWithGlobalConfig.flags,
  }

  async run(): Promise<void> {
    if (this.globalConfig === undefined) {
      this.log('Configuration not set')
    } else {
      console.log((await this.ablyControlApi!.listApps()).map(app => app.name).sort())
    }
  }
}
