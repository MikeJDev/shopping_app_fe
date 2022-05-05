import React from 'react'
// MUI
import { Box } from '@mui/system';
// custom
import Item from './Item'


export default function ContainerHydrated({
  items,
}) {
  const itemsList = items.map((item) => {
    return <Item key={item.id} item={item} />
  })
  
  return (
    <Box>
      {itemsList}
    </Box>
  )
}