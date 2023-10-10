import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TableRow from '../components/TableRow'
import TableHead from '../components/TableHead'

const Home = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		axios.get('http://localhost:3000/users').then(res => {
			setData(res.data)
		})
	}, [])

	return (
		<div className='w-[50%] mx-auto'>
			<h1 className='text-center text-4xl py-4'>List of Users</h1>
			<div className='border flex justify-center items-center'>
				<table className='w-full mb-5 border border-solid border-[#dddddd] border-collapse'>
					<thead>
						<TableHead />
					</thead>
					<tbody>
						{data.map(user => (
							<TableRow key={user.id} data={user} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Home
