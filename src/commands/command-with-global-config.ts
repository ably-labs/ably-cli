import {Command, Config, Flags} from '@oclif/core'
import * as fs from 'fs-extra'
import * as path from 'node:path'
import {GlobalConfiguration} from '../global-config'
import {ConsoleLogger, LogLevel} from '../helpers/console-logger'
import {AblyControlApi} from '../helpers/control-api'

export default abstract class CommandWithGlobalConfig extends Command {
  static flags = {
    debug: Flags.boolean({
      description: 'Enables debug logging for the CLI',
    }),
    help: Flags.help(),
  }

  flags: {
    [name: string]: any
  } = {}

  args: {
    [name: string]: any
  } = {}

  globalConfig: GlobalConfiguration = new GlobalConfiguration()
  ablyControlApi?: AblyControlApi = undefined

  protected logger: ConsoleLogger

  constructor(argv: string[], config: Config) {
    super(argv, config)
    this.logger = new ConsoleLogger(
      this.flags.debug ? LogLevel.debug : LogLevel.info,
    )
  }

  async init(): Promise<void> {
    super.init()
    const configLocation = this.getConfigPath()

    await this.loadGlobalConfig(configLocation)
    if (this.globalConfig.accountId && this.globalConfig.controlApiToken) {
      this.ablyControlApi = new AblyControlApi(this.globalConfig.accountId!, this.globalConfig.controlApiToken!)
    }
  }

  async run(): Promise<void> {
    this.logger = new ConsoleLogger(
      this.flags.debug ? LogLevel.debug : LogLevel.info,
    )
    this.logger.debug('--debug', true)
  }

  getConfigPath(): string {
    return path.join(this.config.configDir, 'config.json')
  }

  async loadGlobalConfig(configLocation: string): Promise<void> {
    if (fs.existsSync(configLocation)) {
      this.globalConfig = await fs.readJson(configLocation)
    } else {
      this.warn(
        `cannot find config file at ${configLocation}\nRun "ably config update" to configure the CLI`,
      )
    }
  }

  async saveGlobalConfig(): Promise<void> {
    await fs.outputJson(this.getConfigPath(), this.globalConfig, {spaces: 2})
    this.log('Configuration saved')
  }
}
