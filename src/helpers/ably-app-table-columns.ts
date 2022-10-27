import {CliUx} from '@oclif/core'

export const ablyAppColumns: CliUx.Table.table.Columns<Record<string, any>> = {
  name: {
    header: 'Name',
    minWidth: 25,
  },
  id: {
    header: 'ID',
    minWidth: 10,
  },
  status: {
    header: 'Status',
    minWidth: 10,
  },
  tlsOnly: {
    header: 'TLS Only',
    minWidth: 10,
  },
  created: {
    header: 'Created',
    get: row => new Date(row.created).toUTCString(),
    minWidth: 10,
  },
}
