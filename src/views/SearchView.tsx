// tsrafce
import React from 'react'
import SearchForm from '../components/SearchForm'
import SearchResults from '../components/SearchResults'

interface Props {

}

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
          <SearchResults />
        </div>
      </div>

    </div>
  )
}

export default SearchView
