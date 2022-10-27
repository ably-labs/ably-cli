import {AblyApp} from './ably-app'

// const appApi = 'https://control.ably.net/v1/apps'
const accountApi = 'https://control.ably.net/v1/accounts'

export class AblyControlApi {
  private defaultHeaders;

  constructor(private accountId: string, private controlApiKey: string) {
    this.accountId = accountId
    this.controlApiKey = controlApiKey
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.controlApiKey}`,
    }
  }

  async listApps(): Promise<AblyApp[]> {
    const apps = await this.get<AblyApp[]>(`${accountApi}/${this.accountId}/apps`)

    return apps
  }

  //   async getApp(
  //     appName: string,
  //   ) {
  //     // core.info(`Retrieving app: ${appName}`);
  //     const appListResponse = await this.listApps();
  //     const allApps = await appListResponse.json();
  //     return allApps.filter((app) => app.name.toLowerCase() === appName.toLowerCase() && app.status.toLowerCase() === "enabled")[0];
  //   }

  //   async createApp(
  //     appName: string,
  //   ) {
  //     // core.info(`Creating app: ${appName}`);

  //     const request = {
  //       name: appName,
  //       tlsOnly: true,
  //       apnsUseSandboxEndpoint: false,
  //     }

  //     const response = await this.post(`${accountApi}/${this.accountId}/apps`, request)
  //     if (!response.ok) {
  //       // core.error(response.statusText)
  //       throw new Error(response.text())
  //     }
  //     return response.json()
  //   }

  //   async getOrCreateApp(
  //     appName: string,
  //   ) {
  //     const allApps = await this.listApps()
  //     const app = allApps.filter((app) => app.name.toLowerCase() === appName.toLowerCase() && app.status.toLowerCase() === 'enabled')[0]

  //     if (app) {
  //       return app;
  //     }

  //     // core.info(`${appName} does not exist.`);
  //     return this.createApp(appName)
  //   }

  //   async listApiKeys(
  //     appId: string,
  //   ) {
  //     const response = await this.get(`${appApi}/${appId}/keys`);
  //     if (response.status !== 200) {
  //       return []
  //     }

  //     return response.json()
  //   }

  //   async createApiKey(appId, keyName, keyCapabilities) {
  //     core.info(`Creating an API key for app '${appId}' with name '${keyName}'...`);

  //     const capabilities = keyCapabilities
  //       .split(",")
  //       .map((capability) => capability.trim())
  //       .filter((capability) => capability !== "");

  //     const response = await this.post(`${appApi}/${appId}/keys`, { name: keyName, capability: { "*": capabilities } });
  //     if (!response.ok) {
  //       core.error(response.statusText);
  //       throw new Error(response.text());
  //     }
  //     return response.json();
  //   }

  async get<T>(url: string): Promise<T> {
    const response = await fetch(url, {headers: this.defaultHeaders})
    // core.info(`GET: ${url} returned status: ${response.status}`);
    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return response.json() as T
  }

  //   async post(url, body) {
  //     const options = { method: "post", headers: this.defaultHeaders, body: JSON.stringify(body) };
  //     const response = await fetch(url, options);
  //     core.info(`POST: ${url} returned status: ${response.status}`);
  //     return response;
  //   }
}
