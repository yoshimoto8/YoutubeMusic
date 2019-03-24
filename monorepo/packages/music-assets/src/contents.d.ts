export declare class Contents {
  language: {
    [x: string]: string
  }
  constructor({
    languages
  }: {
    languages: {
      [x: string]: string
    }
  })
  getLanguage(key: string): string
}
