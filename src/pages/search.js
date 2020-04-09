import React, { useState, useEffect } from "react"
import debounce from "lodash.debounce"
import Layout from "../components/layout"
import SearchForm from "../components/searchForm"
import SearchResults from "../components/searchResults"

const Search = ({ data, location }) => {
  const [results, setResults] = useState([])
  const searchQuery = new URLSearchParams(location.search).get("keywords") || ""

  useEffect(() => {
    if (searchQuery && window.__LUNR__) {
      const debouncedSearch = debounce(async () => {
        const lunr = await window.__LUNR__.__loaded
        const refs = lunr.en.index.search(searchQuery)
        const posts = refs.map(({ ref }) => lunr.en.store[ref])

        setResults(posts)
      }, 500)

      debouncedSearch()
    }

    if (!searchQuery) setResults([])
  }, [location.search])
  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <SearchForm query={searchQuery} />

      { results.length !== 0 && <SearchResults query={searchQuery} results={results} /> }
      { location.search && results.length === 0 && <h4>Found 0 post on {location.search.match(/\=(.*)/)[1]}</h4>}

    </Layout>
  )
}

export default Search

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
