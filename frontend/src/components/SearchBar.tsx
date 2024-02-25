import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { TextField, InputAdornment, Box, Button, Modal } from '@mui/material'

const SearchBar: React.FC = () => {
  const [open, setOpen] = useState(false)

  const handleSearchClick = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <TextField
        id='search-bar'
        variant='outlined'
        placeholder='Search for a course e.g. COMP1511'
        fullWidth
        size='small'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onClick={handleSearchClick}
        sx={{ mx: 2, maxWidth: 'calc(100% - 32px)', mt: 4 }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box sx={{ bgcolor: 'background.paper', border: '2px solid #000', p: 4 }}>
          <Button variant='outlined' onClick={handleClose}>Dismiss</Button>
        </Box>
      </Modal>
    </>
  );
};

export default SearchBar
