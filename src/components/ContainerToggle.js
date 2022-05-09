import React from 'react'
import { useSelector } from 'react-redux'
//MUI
import { Box } from '@mui/system';

//custom
import ContainerDry from './ContainerDry';
import ContainerHydrated from './ContainerHydrated';
import LoadingIndicator from './LoadingIndicator';

function ContainerToggle({
  isLoading,
}) {
  const items = useSelector((state) => state.items.value); // get the value from the store

  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#fafafa',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    >
      {isLoading ? ( // if loading, show loading indicator
        <LoadingIndicator />
      ) : (
        items.length > 0 ? ( // if items exist, show hydrated container
          <ContainerHydrated
            items={items}
          />
        ) : ( // if no items, show dry container
          <ContainerDry />
        )
      )}
    </Box>
  )
}

export default ContainerToggle