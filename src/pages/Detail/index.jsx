import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
    const [detail, setDetail] = useState([])


    const {id} = useParams()
    
 useEffect(() => {
   fetch("http://localhost:3000/"+id)
   .then ((res)=>res.json())
   .then((data)=>setDetail(data))
 }, [])
 

  return (
    <div>
        <ul><li>{detail.name}</li>
        <li>{detail.time}</li>
        <li>{detail.comment}</li>
        <li>{detail.folder}</li>
        <img src={detail.image}  />
        <li>{detail.description}</li></ul>
    </div>
  )
}

export default Detail