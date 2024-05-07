import React from 'react'
import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import {BiCameraMovie , BiSearchAlt2} from 'react-icons/bi'
import './Navbar.css'

const Navbar = () => {
  
  const [search , setSearch] = useState('')
  const navigate = useNavigate()

  const handleSubmit= (e) => {
    e.preventDefault()
    
    if(!search) return
    navigate(`/search?q=${search}`)
  }
  return (
    <nav id='navbar' className='navbar'>
        <h2>
          <Link to="/" className='l'><BiCameraMovie />Movie Lib</Link>
        </h2>
        <form onSubmit={handleSubmit}> 
            <input type="text" name="" id="" placeholder='Search...' onChange={(e) => setSearch(e.target.value)} value={search}/>
            <button type="submit" > <BiSearchAlt2  className='lupa'/></button>
        </form>
      </nav>
  )
}

export default Navbar
