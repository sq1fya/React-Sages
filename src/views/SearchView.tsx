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
  const token = JSON.parse(sessionStorage.getItem('token') || 'null')
  if (token) { return token }

  const access_Token = new URLSearchParams(window.location.hash).get('#/access_token')
  if (access_Token) {
    sessionStorage.setItem('token', JSON.stringify(access_Token))
    window.location.hash = ''
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


const searchAlbumsAPI = (query: string) => {
  const token = authorize()
  if (!token) { return Promise.reject('No Token') }

  const params = new URLSearchParams({
    type: 'album', query
  })
  return fetch('https://api.spotify.com/v1/search?' + params.toString(), {
    headers: { 'Authorization': 'Bearer ' + token }
  })
    .then(resp => resp.json() as Promise<AlbumsSearchResponse>)
    .then(resp => resp.albums.items)
}


const SearchView = (props: Props) => {
  const [results, setResults] = useState<Album[]>([])

  const searchAlbums = (q: string) => {
    searchAlbumsAPI(q)
      .then(resp => {
        setResults(resp)
      })
  }

  useEffect(() => {
    searchAlbums('batman')
  }, [])

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
