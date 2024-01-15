import React, { useState, useEffect, useContext } from 'react'
import "./index.scss"
import { SearchContext } from '../../context/searchContext'
import { WishlistContext } from '../../context/wishlistContext'
import { NavLink } from 'react-router-dom'

function ProductCards() {
    const [product, setProduct] = useState([])
    const { search, handleSearch } = useContext(SearchContext)
    const [sortedproperty, setSortedproperty] = useState(null)
    const {addWishlist} = useContext(WishlistContext)

    useEffect(() => {
        fetch("http://localhost:3000/")
            .then((res) => res.json())
            .then((data) => setProduct(data))
    }, [])

    return (
        <div className='productCards'>
            <div className="cards">
                <input type="text" onChange={(e) => handleSearch(e)} />
                <button onClick={()=>setSortedproperty({property:"name", asc:true})}>A-Z</button>
                <button onClick={()=>setSortedproperty({property:"name", asc:false})}>Z-A</button>
                <button onClick={()=>setSortedproperty(null)}>Default</button>
                <div className="productCard">
                    {product
                    .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
                    .sort((a,b) => {
                        if (sortedproperty && sortedproperty.asc) {
                            return (a[sortedproperty.property].toLowerCase() > b[sortedproperty.property].toLowerCase()) ? 1 : ((b[sortedproperty.property].toLowerCase() > a[sortedproperty.property].toLowerCase()) ? -1 : 0)
                        }else if (sortedproperty && sortedproperty.asc === false) {
                           return (a[sortedproperty.property].toLowerCase() < b[sortedproperty.property].toLowerCase()) ? 1 : ((b[sortedproperty.property].toLowerCase() < a[sortedproperty.property].toLowerCase()) ? -1 : 0)
                        }else{
                            return 0
                        }
                    })
                    .map((x) => <ul className='about'>
                            <li>{x.name}</li>
                            <div className='head'> <li>{x.time}</li>
                                <li>{x.comment}</li>
                                <li>{x.folder}</li>
                                <i onClick={()=>addWishlist(x)} class="fa-regular fa-heart"></i>
                                </div>
                            <li>{x.name}</li>
                            <div className='image'> <img src={x.image} />
                                <li>{x.description}</li>
                                <li><NavLink to={"/detail/" +x._id}>go to learn more</NavLink></li>
                                </div>
                                
                                </ul>)}
                </div>
            </div>
        </div>
    )
}

export default ProductCards