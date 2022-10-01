import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <Box bg='tomato' w='100%' p={4} color='white' justifyContent={'space-around'} display={'flex'}>
        <Link to={"/"}>Signup</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/blog"}>Blog</Link>
    </Box>
  )
}

export default Navbar