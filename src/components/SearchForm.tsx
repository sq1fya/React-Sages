import React, { useState } from 'react'

interface Props {
  query?: string,
  onSearch: (q: string) => any
}

const SearchForm = ({ onSearch }: Props) => {
  const [query, setQuery] = useState('batman')
  const [type, setType] = useState('album')

  return (
    <div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search" value={query} onChange={event => setQuery(event.target.value)} />

        {/* 
        <div className="input-group-append">
          <div className="form-text px-3">{170 - query.length} / 170</div>
        </div>
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="album">Album</option>
          <option value="artist">Artist</option>
        </select> */}

        <div className="input-group-append">
          <button className="btn btn-outline-secondary"
            onClick={() => {
              onSearch(query)
            }}>
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchForm
