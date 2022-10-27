export class GlobalConfiguration {
    accountId: string | null
    controlApiToken: string | null

    [index: string]: any

    constructor() {
      this.accountId = null
      this.controlApiToken = null
    }
}
