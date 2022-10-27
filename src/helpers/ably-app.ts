export interface AblyApp {
  accountId: string
  id: string
  name: string
  status: string
  created: number
  tlsOnly?: boolean
  apnsUseSandboxEndpoint?: boolean
  _links: any
}
