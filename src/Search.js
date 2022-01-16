import React, { useState } from 'react'
import './Search.css'
import { DateRangePicker } from 'react-date-range'
import { Button } from '@material-ui/core'
import PeopleIcon from '@material-ui/icons/People'
import { useNavigate } from 'react-router-dom'
function Search() {
  const history = useNavigate()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  return (
    <div className='search'>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />

      <h2>
        No of Guest
        <PeopleIcon />
      </h2>

      <input min={0} defaultValue={2} type='number' />
      <Button onClick={() => history('/search')}>Search Airbnb</Button>
    </div>
  )
}

export default Search
