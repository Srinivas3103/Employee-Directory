import React from 'react'
import './Navbar.css';
const Navbar = ({search, setSearch}) => {
  const handleHeadingClick = () => {
    setSearch('');
    window.location.reload();
  };

  return (
    <div className='navbar'>
        <h1
          className='heading'
          onClick={handleHeadingClick}
        >
          Employee Directory
        </h1>
        <input
          type="search"
          placeholder='Search by name or email'
          className='searchbar'
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
    </div>
  )
}

export default Navbar
