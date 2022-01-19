import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import GroupIcon from '@mui/icons-material/Group';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FolderIcon from '@mui/icons-material/Folder';
import IconText from './IconText';


export default function Navbar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FormatListBulletedIcon />
              </ListItemIcon>
              <ListItemText primary="Tasks" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
        <Toolbar />
      </Box>
  );
}