/* eslint-disable @typescript-eslint/no-var-requires */
// ESM
import dns from 'node:dns'
export const foo = () => console.log(dns.getServers())

// CommonJS
const _dns = require('node:dns')
const bar = () => console.log(_dns.getServers())
module.exports = bar
