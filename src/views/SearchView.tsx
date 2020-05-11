// tsrafce
import React, { useState, useEffect } from 'react'
import SearchForm from '../components/SearchForm'
import SearchResults from '../components/SearchResults'
import { Album, AlbumsSearchResponse } from '../models/Album'

interface Props {

}

const fakeResults: Album[] = [
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

const authorize = () => {
  const access_Token = new URLSearchParams(window.location.hash).get('#access_token')
  if (access_Token) {
    return access_Token
  }

  const params = new URLSearchParams({
    client_id: 'fdc7b9f035c34ef7be6cd42db0b9ea3b',
    response_type: 'token',
    redirect_uri: 'http://localhost:3000/'
  })
  const url = 'https://accounts.spotify.com/authorize?' + params.toString()
  window.location.replace(url)
}


const searchAlbumsAPI = (query: string, token: string) => {
  const params = new URLSearchParams({
    type: 'album', query: 'batman'
  })
  return fetch('https://api.spotify.com/v1/search?' + params.toString(), {
    headers: { 'Authorization': 'Bearer ' + token }
  })
    .then(resp => resp.json() as Promise<AlbumsSearchResponse>)
    .then(resp => resp.albums.items)
}


const SearchView = (props: Props) => {
  const [token, setToken] = useState<string>('')
  const [results, setResults] = useState<Album[]>([])

  useEffect(() => {
    const token = authorize();
    token && setToken(token)
  }, [true])

  const searchAlbums = (q: string) => {
    searchAlbumsAPI(q, token)
      .then(resp => setResults(resp))
  }

  return (
    <div>
      <h3>Search</h3>

      <div className="row">
        <div className="col">
          <SearchForm query="" onSearch={searchAlbums} />
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
