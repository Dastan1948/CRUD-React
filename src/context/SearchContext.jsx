import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const searchContext = createContext()

const SearchContext = ({children}) => {
  const [data, setData] = useState([])
	const [searchValue, setSearchValue] = useState('')

	useEffect(() => {
		axios.get('http://localhost:3000/users')
			.then(res => {
				setData(res.data)
			})
			.catch(err => console.log(err))
	}, [])

  const value = {data, searchValue, setSearchValue}
  return (
    <searchContext.Provider value={value}>
      {children}
    </searchContext.Provider>
  )
}

export default SearchContext