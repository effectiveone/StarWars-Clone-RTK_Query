import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import IconButton from '@mui/joy/IconButton';
import CircularProgress from '@mui/joy/CircularProgress';


const Spinner = () => {
  return (
    <div className="text-center mt-5">
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button startDecorator={<CircularProgress variant="solid" thickness={2} />}>
        Loading…
      </Button>
      </Box>
    </div>
  );
};

export default Spinner;
