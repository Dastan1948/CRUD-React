import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
  const [values, setValues] = useState({
    name: '',
    surname: '',
    age: '',
    email: '',
  })

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()

    axios.post('http://localhost:3000/users', values)
      .then(res => {
        console.log(res)
        navigate('/')
      })
      .catch(err => console.log(err))
  }

	return (
		<div className='flex w-screen h-screen justify-center items-center bg-[#f8f9fa]'>
			<div className='w-[25%] flex flex-col justify-center items-center border bg-white shadow px-5 pt-4 pb-6 rounded'>
				<h1 className='text-center text-3xl mb-2'>Add a User</h1>
				<form onSubmit={handleSubmit}>
					<div className='mb-2'>
						<label htmlFor='name'>Name:</label>
						<input
							type='text'
							name='name'
							className='block border border-solid border-[#000] p-1 rounded-md'
							placeholder='Enter Name'
              onChange={e => setValues({...values, name: e.target.value})}
						/>
					</div>
					<div className='mb-2'>
						<label htmlFor='surname'>Surname:</label>
						<input
							type='text'
							name='surname'
							className='block border border-solid border-[#000] p-1 rounded-md'
							placeholder='Enter Surname'
              onChange={e => setValues({...values, surname: e.target.value})}
						/>
					</div>
					<div className='mb-3'>
						<label htmlFor='age'>Age:</label>
						<input
							type='number'
							name='age'
							className='block border border-solid border-[#000] p-1 rounded-md'
							placeholder='Enter Age'
              onChange={e => setValues({...values, age: e.target.value})}
						/>
					</div>
					<div className='mb-3'>
						<label htmlFor='email'>Email:</label>
						<input
							type='email'
							name='email'
							className='block border border-solid border-[#000] p-1 rounded-md'
							placeholder='Enter Email'
              onChange={e => setValues({...values, email: e.target.value})}
						/>
					</div>
					<button className='border border-solid border-green-300 rounded-md py-[1px] px-1 hover:text-green-400 mr-3'>Submit</button>
					<Link to='/' className='border border-solid border-green-300 rounded-md py-[1px] px-1 hover:text-green-400'>
						Back
					</Link>
				</form>
			</div>
		</div>
	)
}

export default Create
