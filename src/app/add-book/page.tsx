import React from 'react'
import FormAddBooks from '../component/organisms/FormAddBooks'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const Page = () => {
  return (
  <div className='h-screen flex items-center'>
    <Container maxWidth="sm" className='shadow-md px-7 py-10'>
      <Typography variant='h3'>Tambah Buku</Typography>
      <hr className='border border-black mt-3 mb-6'/>
      <FormAddBooks/>
    </Container>
  </div>
    
  )
}

export default Page