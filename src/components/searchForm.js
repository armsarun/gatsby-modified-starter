import React from "react"
import { navigate } from "gatsby"

import {SearchContainer} from "../styles/common"

const SearchForm = ({ query }) => (
  <form role="search" method="GET">
  <SearchContainer>
    <label htmlFor="search-input">
      <h4>Search Posts</h4>
    </label>
    <input
      type="search"
      id="search-input"
      name="keywords"
      aria-controls="search-results-count"
      onChange={e =>
        navigate(`/search?keywords=${encodeURIComponent(e.target.value)}`)
      }
      value={query}
    />
    <button type="submit">Submit</button>
    </SearchContainer>
  </form>
)

export default SearchForm
