import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const TableRow = ({ data }) => {
	
	const handleDelete = (id) => {
		axios.delete(`http://localhost:3000/users/${id}`)

		location.reload()
	}

	return (
		<tr>
			<td className='border border-solid border-[#dddddd] p-1 text-center'>
				{data.id}
			</td>
			<td className='border border-solid border-[#dddddd] p-1 text-center'>
				{data.name}
			</td>
			<td className='border border-solid border-[#dddddd] p-1 text-center'>
				{data.surname}
			</td>
			<td className='border border-solid border-[#dddddd] p-1 text-center'>
				{data.age}
			</td>
			<td className='border border-solid border-[#dddddd] p-1 text-center'>
				{data.email}
			</td>
			<td className='flex justify-center gap-1 border border-solid border-[#dddddd] p-1'>
				<Link
					to={`/reade/${data.id}`}
					className='border border-solid border-green-300 rounded-md py-[1px] px-1 hover:text-green-400'
				>
					Read
				</Link>
				<Link
					to={`/update/${data.id}`}
					className='border border-solid border-green-300 rounded-md py-[1px] px-1 hover:text-green-400'
				>
					Edit
				</Link>
				<button
					className='border border-solid border-green-300 rounded-md py-[1px] px-1 hover:text-green-400'
					onClick={e => handleDelete(data.id)}
				>
					Delete
				</button>
			</td>
		</tr>
	)
}

export default TableRow
