import React, {useEffect, useState } from 'react'
import axios from "axios"

export default function App() {
  const [pokimons, setPokimons] = useState([])
  useEffect(() => {
    axios.get("https://api.pokemontcg.io/v2/cards?pageSize=10").then((result)=>{
      setPokimons(result.data.data)
      console.log(pokimons);
    })
  }, [])
  return (
    <div>
      
    </div>
  )
}
