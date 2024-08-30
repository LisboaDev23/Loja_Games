declare interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

declare type Game = {
  //aqui queremos apenas um recurso para dizer qual o tipo do objeto, como ele se parece
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}
