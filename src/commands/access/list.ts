import { CliUx } from '@oclif/core'
import CommandWithGlobalConfig from '../command-with-global-config'

export default class Index extends CommandWithGlobalConfig {
  static description = 'Ably CLI access control'

  static examples = [
    `$ ably access
`,
  ]

  static flags = {
    ...CommandWithGlobalConfig.flags,
    ...CliUx.ux.table.flags(),
  }

  static hidden = false

  async run(): Promise<void> {
    if (this.globalConfig === undefined) {
      this.log('Configuration not set')
    } else {
      const {flags} = await this.parse(Index)

      CliUx.ux.table(
        [this.globalConfig] as Record<string, any>[],
        {
          accountId: {
            header: 'Account ID',
            minWidth: 10,
          },
          controlApiToken: {
            header: 'Control API Token',
            minWidth: 25,
          },
        },
        {
          printLine: this.log.bind(this),
          ...flags,
        },
      )
    }
  }
}
