import React, { useState } from 'react'
import './header.css'
import { useDispatch } from 'react-redux'
import { searchTerm } from '../../store/slice/Movie'

const Header = ( ) => {
    const [search, setsearch] = useState('')
    const dispatch = useDispatch()
    const handleInput = (event) => {
      
        setsearch(event.target.value)
       dispatch(searchTerm((event.target.value))) 
    }
  return (
    <div className='header'>
        <h2 className='logo'>Filmler</h2>
        <input placeholder='Film Ara....' onChange={handleInput} value={search} className='input'></input>
    </div>
  )
}

export default Header