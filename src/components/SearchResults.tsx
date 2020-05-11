import React, { FC } from 'react'
import { Album } from '../models/Album'

interface Props {
  results?: Album[]
}

const SearchResults: FC<Props> = (props) => {

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2">
        {
          props.results?.map(result => <div key={result.id}
            className="col mb-4">
            <div className="card">

              <img src={result.images[0].url} className="card-img-top" />

              <div className="card-body">
                <h5 className="card-title">{result.name}</h5>

              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  )
}

export default SearchResults


SearchResults.defaultProps = {
  results: [
    {
      id: '123',
      name: 'TEst album',
      artists: [],
      images: [
        {
          url: 'https://www.placecage.com/c/300/300'
        }
      ],
    },
    {
      id: '234',
      name: 'TEst album 123',
      artists: [],
      images: [
        {
          url: 'https://www.placecage.com/c/300/300'
        }
      ],
    },
    {
      id: '345',
      name: 'TEst album 234',
      artists: [],
      images: [
        {
          url: 'https://www.placecage.com/c/300/300'
        }
      ],
    },
    {
      id: '456',
      name: 'TEst album 345',
      artists: [],
      images: [
        {
          url: 'https://www.placecage.com/c/300/300'
        }
      ],
    },
  ]
}