import {AblyApp} from './ably-app'
const fetch = require('node-fetch')

// const appApi = 'https://control.ably.net/v1/apps'
const accountApi = 'https://control.ably.net/v1/accounts'

export class AblyControlApi {
  private defaultHeaders

  constructor(private accountId: string, private controlApiKey: string) {
    this.accountId = accountId
    this.controlApiKey = controlApiKey
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.controlApiKey}`,
    }
  }

  async listApps(): Promise<AblyApp[]> {
    const apps = await this.get<AblyApp[]>(
      `${accountApi}/${this.accountId}/apps`,
    )

    return apps
  }

  //   async getApp(
  //     appName: string,
  //   ) {
  //     // core.info(`Retrieving app: ${appName}`)
  //     const appListResponse = await this.listApps()
  //     const allApps = await appListResponse.json()
  //     return allApps.filter((app) => app.name.toLowerCase() === appName.toLowerCase() && app.status.toLowerCase() === 'enabled')[0]
  //   }

  async createApp(appName: string, tlsOnly: boolean): Promise<AblyApp> {
    const request = {
      name: appName,
      tlsOnly: tlsOnly,
      apnsUseSandboxEndpoint: false,
    }

    const app = await this.post<AblyApp>(
      `${accountApi}/${this.accountId}/apps`,
      request,
    )

    return app
  }

  async getOrCreateApp(appName: string, tlsOnly: boolean): Promise<AblyApp> {
    const allApps = await this.listApps()
    const app = allApps.find(
      app =>
        app.name.toLowerCase() === appName.toLowerCase() &&
        app.status.toLowerCase() === 'enabled',
    )

    if (app) {
      console.log('This app already exists and will not be created. You can use `ably apps update` to update an existing app.')
      return app
    }

    return this.createApp(appName, tlsOnly)
  }

  //   async listApiKeys(
  //     appId: string,
  //   ) {
  //     const response = await this.get(`${appApi}/${appId}/keys`)
  //     if (response.status !== 200) {
  //       return []
  //     }

  //     return response.json()
  //   }

  //   async createApiKey(appId, keyName, keyCapabilities) {
  //     core.info(`Creating an API key for app '${appId}' with name '${keyName}'...`)

  //     const capabilities = keyCapabilities
  //       .split(',')
  //       .map((capability) => capability.trim())
  //       .filter((capability) => capability !== '')

  //     const response = await this.post(`${appApi}/${appId}/keys`, { name: keyName, capability: { '*': capabilities } })
  //     if (!response.ok) {
  //       core.error(response.statusText)
  //       throw new Error(response.text())
  //     }
  //     return response.json()
  //   }

  async get<T>(url: string): Promise<T> {
    const response = await fetch(url, {
      headers: this.defaultHeaders},
    )
    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return response.json() as T
  }

  async post<T>(url: string, body: any): Promise<T> {
    const options = {
      method: 'post',
      headers: this.defaultHeaders,
      body: JSON.stringify(body),
    }
    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return response.json() as T
  }
}
