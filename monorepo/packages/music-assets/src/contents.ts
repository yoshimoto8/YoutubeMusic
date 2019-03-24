export class Contents {
  language: { [x: string]: string }
  constructor({ languages }: { languages: { [x: string]: string } }) {
    this.language = languages
  }

  getLanguage(key: string) {
    if (!this.language[key]) {
      throw new Error(`language key not found: ${key}`)
    }

    return this.language[key]
  }
}
