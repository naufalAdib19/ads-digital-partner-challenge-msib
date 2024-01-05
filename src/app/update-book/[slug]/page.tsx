"use client"
import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import FormUpdateBook from '../../component/organisms/FormUpdateBooks'
import { useParams } from 'next/navigation'

const Page = () => {
    const { slug } = useParams()
    const params = slug;
    console.log(params, slug)

    return (
        <div className='h-screen flex items-center'>
            <Container maxWidth="md" className='shadow-md px-7 py-10'>
                <Typography variant='h4'>Update Buku</Typography>
                <hr className='border border-black mt-3 mb-6'/>
                <FormUpdateBook slug={params}/>
            </Container>
        </div>
     )
}

export default Page