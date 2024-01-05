"use client"
import React from 'react'
import { useRouter, usePathname, useParams } from 'next/navigation'
import { Container } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'

type booksDataType = {
  title: string,
  description: string,
  price: number,
  author: string
}

const Page = () => {
  const [data, setdata] = useState<booksDataType>()
  const [isLoad, setIsLoad] = useState<boolean>(false)
  const { slug } = useParams()
  const params = slug[0];

  async function getDetailBooks() {
    setIsLoad(true)
    try {
      const res = axios.get(`https://testcasefe2023.ignorelist.com/api/v1/data/${params}`, {
      headers: {
        "nim": "215150400111021"
      }
      })
      const data = (await res).data.data
      setdata(data)
      setIsLoad(false)
    } catch(err) {
      console.log(err)
    }
    
  }

  useEffect(() => {
    getDetailBooks();
  }, [])
  
  return (
    <div className='flex h-screen items-center'>
      <Container maxWidth='md' className='shadow-md py-5 px-8 flex items-center justify-center'>
        {
          isLoad ? <CircularProgress /> 
          :
          <div className='w-full'>
            <h1 className='text-3xl font-semibold'>Detail Buku</h1>
            <hr className='border border-slate-300 my-5'/>
            <h1 className='font-semibold'>Judul</h1>
            <p>{data?.title}</p>
            <h1 className='font-semibold mt-5' >Deskripsi</h1>
            <p>{data?.description}</p>
            <h1 className='font-semibold mt-5' >Harga</h1>
            <p>{data?.price}</p>
            <h1 className='font-semibold mt-5'>Penulis</h1>
          <p>{data?.author}</p>
        </div>
        }
        
      </Container>
    </div>
  )
}

export default Page