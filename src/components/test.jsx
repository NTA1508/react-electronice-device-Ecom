import { useEffect, useState } from "react";
import axios from 'axios'
export default function Test(){
  const [products, setProducts] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/getProducts')
    .then(products => setProducts(products.data))
    .catch(err => console.log(err))
  }, [])
  return(
    <div>
      {products.map(products => {
        return(
          <h1>{products.type}</h1>
        )
      })}
    </div>
  )
}