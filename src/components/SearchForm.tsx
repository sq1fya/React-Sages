import React, { useState, useEffect, useRef } from 'react'

interface Props {
  query?: string,
  onSearch: (q: string) => any
}

const SearchForm = ({ onSearch }: Props) => {
  const [query, setQuery] = useState('batman')
  const [type, setType] = useState('album')

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(query)
    }, 500)

    return () => clearTimeout(handler)
  }, [query, type])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search"
          ref={inputRef}
          value={query} onChange={event => setQuery(event.target.value)} />

        <input type="text" className="form-control" placeholder="Search"
          value={type} onChange={event => setType(event.target.value)} />

      </div>
    </div>
  )
}

export default SearchForm

{/* <div className="input-group-append">
  <button className="btn btn-outline-secondary"
    onClick={() => onSearch(query)}>
    Search
  </button>
</div> */}