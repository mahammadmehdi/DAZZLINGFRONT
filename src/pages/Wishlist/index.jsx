import React, {useContext} from 'react'
import { WishlistContext } from '../../context/wishlistContext'

function Wishlist() {
    const {wishlist} = useContext(WishlistContext)
  return (
    <div>

       {wishlist.map((x)=> (<ul><li>{x.name}</li>
        <li>{x.time}</li>
        <li>{x.comment}</li>
        <li>{x.folder}</li>
        <img src={x.image} alt="" />
        <li>{x.description}</li>
        </ul>))}
    </div>
  )
}

export default Wishlist