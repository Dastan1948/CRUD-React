import React, { useContext } from 'react'
import TableHead from '../components/TableHead'
import TableRow from '../components/TableRow'
import { searchContext } from '../context/searchContext'

const Home = () => {
	const { data, searchValue } = useContext(searchContext)

	const users = data
		.filter(value => {
			if (value.name.toLowerCase().includes(searchValue.toLowerCase())) {
				return true
			}
			return false
		})
		.map(user => <TableRow key={user.id} data={user} />)

	return (
		<div className='w-[50%] mx-auto'>
			<h1 className='text-center text-4xl py-4'>List of Users</h1>
			<div className='border flex justify-center items-center'>
				<table className='w-full mb-5 border border-solid border-[#dddddd] border-collapse'>
					<thead>
						<TableHead />
					</thead>
					<tbody>{users}</tbody>
				</table>
			</div>
		</div>
	)
}

export default Home
