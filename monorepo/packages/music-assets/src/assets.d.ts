import { Contents } from './contents'
export declare class Asset {
  contents: Contents | undefined | null
  constructor()
  setContents(contents: Contents): void
  getLanguage(key: string): string
}
export declare const asset: Asset
export declare const getLanguage: any
