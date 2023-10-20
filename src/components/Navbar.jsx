import React from 'react'
import { Link } from 'react-router-dom'
import { SearchBar } from './SearchBar'

const Navbar = () => {
	return (
		<header className='bg-slate-400 py-3'>
			<div className='container max-w-[1200px] mx-auto'>
				<div className='flex justify-between items-center'>
				<div>
						<a href='#!' className='text-2xl border border-solid border-green-400 rounded-md px-3 py-1 hover:text-white hover:bg-green-600'>GitHub</a>
					</div>
					<nav>
						<ul className='flex gap-8'>
							<li>
								<Link to='/' className='text-2xl hover:text-white'>Home</Link>
							</li>
							<li>
								<Link to='create' className='text-2xl hover:text-white'>Add+</Link>
							</li>
						</ul>
					</nav>
					<SearchBar />
				</div>
			</div>
		</header>
	)
}

export default Navbar
