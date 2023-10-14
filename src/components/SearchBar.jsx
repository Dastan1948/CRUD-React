import React from 'react'

export const SearchBar = ({ searchValue, setSearchValue }) => {
	return (
		<div className='relative'>
			<svg
				className='absolute top-2 left-3 w-6 h-6'
				enableBackground='new 0 0 32 32'
				id='EditableLine'
				version='1.1'
				viewBox='0 0 32 32'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle
					cx='14'
					cy='14'
					fill='none'
					id='XMLID_42_'
					r='9'
					stroke='#000000'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit='10'
					strokeWidth='2'
				/>
				<line
					fill='none'
					id='XMLID_44_'
					stroke='#000000'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit='10'
					strokeWidth='2'
					x1='27'
					x2='20.366'
					y1='27'
					y2='20.366'
				/>
			</svg>
			<input
				type='text'
				placeholder='Search User'
				className='p-1.5 rounded outline-none w-[300px] py-2 px-5 pl-11'
				onChange={e => setSearchValue(e.target.value)}
				value={searchValue}
			/>
			{searchValue && (
				<svg
					onClick={() => setSearchValue('')}
					className='absolute top-3 right-3 w-[18px] h-[18px] opacity-30 hover:opacity-80 hover:cursor-pointer'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z' />
				</svg>
			)}
		</div>
	)
}
