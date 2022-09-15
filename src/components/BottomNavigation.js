import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import BasicModal from './Modal';

export default function FixedBottomNavigation() {
  return (
    <Box sx={{ pb: 2 }}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
          <BasicModal/>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}