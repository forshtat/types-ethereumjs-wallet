declare module 'ethereumjs-wallet' {
  import { Buffer } from 'safe-buffer'

  class Wallet {
    static fromPrivateKey(key: Buffer): Wallet
    static fromV3(json: string, password: string): Wallet
    getPrivateKey(): Buffer
    getAddressString(): string
  }

  namespace Wallet {}

  export = Wallet
}

declare module 'ethereumjs-wallet/hdkey' {
  import { Buffer } from 'safe-buffer'

  class Wallet {
    static fromPrivateKey(key: Buffer): Wallet
    static fromV3(json: string, password: string): Wallet
    getPrivateKey(): Buffer
    getAddressString(): string
  }

  class EthereumHDKey {
    privateExtendedKey (): string
    publicExtendedKey (): string
    derivePath (path: string): EthereumHDKey
    deriveChild (index: number): EthereumHDKey
    getWallet (): Wallet
  }

  export function fromMasterSeed(seed: Buffer): EthereumHDKey
  export function fromExtendedKey(base58key: string): EthereumHDKey
}
