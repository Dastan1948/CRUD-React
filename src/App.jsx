import axios from 'axios'
import Navbar from './components/Navbar'
import Router from './router/Router'
import { useEffect, useState } from 'react'

function App() {
	const [data, setData] = useState([])
	const [searchValue, setSearchValue] = useState('')

	useEffect(() => {
		axios.get('http://localhost:3000/users')
			.then(res => {
				setData(res.data)
			})
			.catch(err => console.log(err))
	}, [])

	return (
		<>
			<Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
			<Router data={data} searchValue={searchValue} />
		</>
	)
}

export default App
