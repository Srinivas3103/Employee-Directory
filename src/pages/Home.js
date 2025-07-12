import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import FilterBar from '../components/FilterBar/FilterBar'
import Employees from '../components/Employees/Employees'
import Footer from '../components/Footer/Footer'
const Home = () => {
  const [filters, setFilters] = useState({});
  const [search, setSearch] = useState('');
  const [showCount, setShowCount] = useState(10);

  const handleApply = (newFilters) => setFilters(newFilters);
  const handleReset = () => setFilters({});
  const handleShowCountChange = (count) => setShowCount(count);
  return (
    <div>
      <Navbar search={search} setSearch={setSearch}/>
      <FilterBar onApply={handleApply} onReset={handleReset} onShowCountChange={handleShowCountChange} />
      <Employees search={search} filters={filters} showCount={showCount}/>
      <Footer  />
    </div>
  )
}

export default Home
