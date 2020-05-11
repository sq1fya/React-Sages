import React, { FC } from 'react'
import { Album } from '../models/Album'

interface Props {
  album: Album
}

const AlbumDetails: React.FC<Props> = ({ album }: Props) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="card">

            <img src={album.images[0].url} className="card-img-top" />

            <div className="card-body">
              <h5 className="card-title">{album.name}</h5>

            </div>
          </div>

        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default AlbumDetails

AlbumDetails.defaultProps = {
  album: {
    id: '123',
    name: 'TEst album',
    artists: [],
    images: [
      {
        url: 'https://www.placecage.com/c/300/300'
      }
    ],
  }
}