// tsrafce
import React from 'react'
import SearchForm from '../components/SearchForm'
import SearchResults from '../components/SearchResults'
import { Album } from '../models/Album'

interface Props {

}

const results: Album[] = [
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

const SearchView = (props: Props) => {


  return (
    <div>
      <h3>Search</h3>

      <div className="row">
        <div className="col">
          <SearchForm />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <SearchResults results={results} />
        </div>
      </div>

    </div>
  )
}

export default SearchView
