import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import SearchContext from './context/searchContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<SearchContext>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</SearchContext>
)
