import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Update = () => {
	const [values, setValues] = useState({
		name: '',
		surname: '',
		age: '',
		email: '',
	})

  const {id} = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then(res => {
        setValues(res.data)
      })
      .catch(err => console.log(err))
  }, [])



  const handleUpdate = e => {
    e.preventDefault()

    axios.patch(`http://localhost:3000/users/${id}`, values)
      .then(res => {
        navigate('/')
				location.reload()
      })
      .catch(err => console.log(err))
  }


	return (
		<div className='flex w-full h-screen justify-center items-center bg-[#f8f9fa]'>
			<div className='w-[25%] flex flex-col justify-center items-center border bg-white shadow px-5 pt-4 pb-6 rounded'>
				<h1 className='text-center text-3xl mb-2'>Add a User</h1>
				<form onSubmit={handleUpdate}>
					<div className='mb-2'>
						<label htmlFor='name'>Name:</label>
						<input
							type='text'
							name='name'
							className='block border border-solid border-[#000] p-1 rounded-md'
							placeholder='Enter Name'
							onChange={e => setValues({ ...values, name: e.target.value })}
              value={values.name}
						/>
					</div>
					<div className='mb-2'>
						<label htmlFor='surname'>Surname:</label>
						<input
							type='text'
							name='surname'
							className='block border border-solid border-[#000] p-1 rounded-md'
							placeholder='Enter Surname'
							onChange={e => setValues({ ...values, surname: e.target.value })}
              value={values.surname}
						/>
					</div>
					<div className='mb-3'>
						<label htmlFor='age'>Age:</label>
						<input
							type='number'
							name='age'
							className='block border border-solid border-[#000] p-1 rounded-md'
							placeholder='Enter Age'
							onChange={e => setValues({ ...values, age: e.target.value })}
              value={values.age}
						/>
					</div>
					<div className='mb-3'>
						<label htmlFor='email'>Email:</label>
						<input
							type='email'
							name='email'
							className='block border border-solid border-[#000] p-1 rounded-md'
							placeholder='Enter Email'
							onChange={e => setValues({ ...values, email: e.target.value })}
              value={values.email}
						/>
					</div>
					<button className='border border-solid border-green-300 rounded-md py-[1px] px-1 hover:text-green-400 mr-3'>
						Update
					</button>
					<Link
						to='/'
						className='border border-solid border-green-300 rounded-md py-[1px] px-1 hover:text-green-400'
					>
						Back
					</Link>
				</form>
			</div>
		</div>
	)
}

export default Update
