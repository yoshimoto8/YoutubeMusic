import { Contents } from './contents'

export class Asset {
  contents: Contents | undefined | null

  constructor() {
    this.contents = null
  }

  setContents(contents: Contents) {
    this.contents = contents
  }

  getLanguage(key: string): string {
    if (!this.contents) {
      throw new Error('コンテンツが設定されていません')
    }

    return this.contents.getLanguage(key)
  }
}

const instance = new Asset()
export const asset = instance
export const getLanguage = instance.getLanguage.bind(instance)
