type MusicId = string

type MusicProps = {
  id: MusicId
  name: string
  artist: string
  time: number
  url: string
}

export class Music {
  id: MusicId
  name: string
  artist: string
  time: number
  url: string
  constructor(attr: MusicProps) {
    this.id = attr.id
    this.name = attr.name
    this.artist = attr.artist
    this.time = attr.time
    this.url = attr.url
  }
}
