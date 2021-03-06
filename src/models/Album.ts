interface Entity {
  id: string
  name: string
}

export interface Album extends Entity {
  /**
   * Images list
   * https://developer.spotify.com/documentation/web-api/reference/object-model/#image-object
   */
  images: Image[]
  artists: Artist[]
  tracks?: Track[]
}

export interface Image {
  url: string
}

export interface Track extends Entity {
}

export interface Artist extends Entity {
  popularity: number
}

// ==

// const album: Album = {
//   id: '123',
//   name: '',
//   images: [],
//   artists: []
// }

// if (album.tracks) {
//   album.tracks.length
// }


// interface Point { x: number; y: number; }
// interface Vector { x: number; y: number; length:number}

// let p: Point = { x: 123, y: 234 }
// let v: Vector = { x: 345, y: 4325, length:123 }

// p = v 
// v = p


// Generated by https://quicktype.io

export interface PagingObject<T> {
  href: string;
  items: T[];
  limit: number;
  next: null;
  offset: number;
  previous: null;
  total: number;
}

export interface AlbumsSearchResponse {
  albums: PagingObject<Album>
}

export interface ExternalUrls {
  spotify: string;
}

// export interface Image {
//   height: number;
//   url:    string;
//   width:  number;
// }
