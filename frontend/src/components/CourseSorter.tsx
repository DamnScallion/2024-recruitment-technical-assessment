import React, { useState } from 'react'
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material'

const CourseSorter: React.FC = () => {
  const [sortBy, setSortBy] = useState('')

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSortBy(event.target.value as string)
  };

  return (
    <FormControl variant='outlined' sx={{ minWidth: 200, mx: 2, my: 2 }} size='small'>
      <InputLabel id='sort-by-label'>Sort by</InputLabel>
      <Select
        labelId='sort-by-label'
        id='sort-by'
        name='sort-by'
        value={sortBy}
        label='Sort by'
        onChange={handleChange}
      >
        <MenuItem value='Alphabetical (A-Z)'>Alphabetical (A-Z)</MenuItem>
        <MenuItem value='Alphabetical (Z-A)'>Alphabetical (Z-A)</MenuItem>
        <MenuItem value='Overall Rating'>Overall Rating</MenuItem>
        <MenuItem value='Enjoyability'>Enjoyability</MenuItem>
        <MenuItem value='Usefulness'>Usefulness</MenuItem>
        <MenuItem value='Manageability'>Manageability</MenuItem>
      </Select>
    </FormControl>
  );
}

export default CourseSorter
