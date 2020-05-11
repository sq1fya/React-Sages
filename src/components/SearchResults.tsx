import React from 'react'

interface Props {

}

const SearchResults = (props: Props) => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col mb-4">
          <div className="card">
            <img src="https://www.placecage.com/c/300/300" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="https://www.placecage.com/c/300/300" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="https://www.placecage.com/c/300/300" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="https://www.placecage.com/c/300/300" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResults
