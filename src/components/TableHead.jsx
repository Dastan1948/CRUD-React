import React from 'react'

const TableHead = () => {
	return (
		<tr>
			<th className='font-bold p-5 bg-[#efefef] border border-solid border-[#dddddd]'>
				ID
			</th>
			<th className='font-bold p-5 bg-[#efefef] border border-solid border-[#dddddd]'>
				Name
			</th>
			<th className='font-bold p-5 bg-[#efefef] border border-solid border-[#dddddd]'>
				Surname
			</th>
			<th className='font-bold p-5 bg-[#efefef] border border-solid border-[#dddddd]'>
				Age
			</th>
			<th className='font-bold p-5 bg-[#efefef] border border-solid border-[#dddddd]'>
				Email
			</th>
			<th className='font-bold p-5 bg-[#efefef] border border-solid border-[#dddddd]'>
				Buttons
			</th>
		</tr>
	)
}

export default TableHead
