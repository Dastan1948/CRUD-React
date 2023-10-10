import React from 'react'

export const SearchBar = () => {
	return (
		<div>
			<input
				type='text'
				placeholder='Search User'
				className='p-1.5 rounded outline-none'
				// onChange={e => handleSearch(e.target.value)}
			/>
		</div>
	)
}
