export enum LogLevel {
  error = 0,
  warn = 1,
  info = 2,
  debug = 3,
}

/**
 * Logs messages to the {@link console}.
 *
 * By default logs at {@link LogLevel.info}.
 */
export class ConsoleLogger {
  loglevel: LogLevel

  constructor(loglevel: LogLevel = LogLevel.info) {
    this.loglevel = loglevel
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  debug(message?: any, ...optionalParams: any[]): void {
    if (this.loglevel >= LogLevel.debug) {
      global.console.debug(message, ...optionalParams)
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  info(message?: any, ...optionalParams: any[]): void {
    if (this.loglevel >= LogLevel.info) {
      global.console.info(message, ...optionalParams)
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  warn(message?: any, ...optionalParams: any[]): void {
    if (this.loglevel >= LogLevel.warn) {
      global.console.warn(message, ...optionalParams)
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  error(message?: any, ...optionalParams: any[]): void {
    if (this.loglevel >= LogLevel.error) {
      global.console.error(message, ...optionalParams)
    }
  }
}
