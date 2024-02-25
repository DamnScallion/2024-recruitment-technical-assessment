import React from 'react'
import { ReactComponent as UnilectivesIcon } from '../assets/unilectives.svg'
import { Drawer, List, ListItem, ListItemIcon, SvgIcon, Divider } from '@mui/material'
import {
  AutoStoriesOutlined,
  VerifiedUserOutlined,
  PlaylistPlayOutlined,
  AccountCircleOutlined,
  DarkModeOutlined,
  ExitToAppOutlined
} from '@mui/icons-material'

const SideBar: React.FC = () => (
  <Drawer
    sx={{
      width: 60,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: 60,
        boxSizing: 'border-box',
        backgroundColor: '#f9fafb',
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      },
    }}
    variant='permanent'
    anchor='left'
  >
    <List>
      <ListItem key='Logo'>
        <ListItemIcon sx={{ py: 0.5 }}>
          <SvgIcon component={UnilectivesIcon} viewBox='0 0 56 50' />
        </ListItemIcon>
      </ListItem>
      <Divider variant='middle' component='li' />
      <ListItem key='Book'>
        <ListItemIcon sx={{ py: 0.5 }}>
          <AutoStoriesOutlined sx={{ color: '#191919' }}/>
        </ListItemIcon>
      </ListItem>
      <ListItem key='Verify'>
        <ListItemIcon sx={{ py: 0.5 }}>
          <VerifiedUserOutlined sx={{ color: '#191919' }}/>
        </ListItemIcon>
      </ListItem>
    </List>

    <List>
      <ListItem key='List'>
        <ListItemIcon>
          <PlaylistPlayOutlined sx={{ color: '#191919' }}/>
        </ListItemIcon>
      </ListItem>
      <ListItem key='User'>
        <ListItemIcon sx={{ py: 0.5 }}>
          <AccountCircleOutlined sx={{ color: '#191919' }}/>
        </ListItemIcon>
      </ListItem>
      <ListItem key='Darkmode'>
        <ListItemIcon sx={{ py: 0.5 }}>
          <DarkModeOutlined sx={{ color: '#191919' }}/>
        </ListItemIcon>
      </ListItem>
      <ListItem key='Logout'>
        <ListItemIcon sx={{ py: 0.5 }}>
          <ExitToAppOutlined sx={{ color: '#191919' }}/>
        </ListItemIcon>
      </ListItem>
    </List>
  </Drawer>
);

export default SideBar
