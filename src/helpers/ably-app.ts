export interface AblyApp {
  accountId: string
  id: string
  name: string
  status: string
  tlsOnly?: boolean
  apnsUseSandboxEndpoint?: boolean
  _links: any
}
