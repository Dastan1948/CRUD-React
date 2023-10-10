import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Read = () => {
	const [data, setData] = useState([])

	const { id } = useParams()

	useEffect(() => {
		axios.get(`http://localhost:3000/users/${id}`).then(res => {
			setData(res.data)
		})
	}, [])

	return (
		<div className='flex w-full h-screen justify-center items-center bg-[#f8f9fa]'>
			<div className='w-[25%] border bg-white shadow px-5 pt-3 pb-5 rounded'>
				<h3 className='text-center mb-2'>Detail of User</h3>
				<div className='mb-2'>
					<strong>Name: {' '} {data.name}</strong>
				</div>
				<div className='mb-2 '>
					<strong>Surname: {' '} {data.surname}</strong>
				</div>
				<div className='mb-2 '>
					<strong>Age: {' '} {data.age}</strong>
				</div>
				<div className='mb-4 '>
					<strong>
						Email: {' '}
						{data.email}
					</strong>
				</div>
				<Link
					to={`/update/${id}`}
					className='border border-solid border-green-300 rounded-md py-[1px] px-1 hover:text-green-400 mr-3'
				>
					Edit
				</Link>
				<Link
					to='/'
					className='border border-solid border-green-300 rounded-md py-[1px] px-1 hover:text-green-400'
				>
					Back
				</Link>
			</div>
		</div>
	)
}

export default Read
