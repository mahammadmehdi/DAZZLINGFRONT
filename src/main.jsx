import { render } from 'react'
import { App } from './app.jsx'
import './index.css'
import SearchProvider from './context/searchContext.jsx'
import WishlistProvider from './context/wishlistContext.jsx'

render(
    <WishlistProvider>
    <SearchProvider>
        <App />
    </SearchProvider>
    </WishlistProvider>
    , document.getElementById('app'))
