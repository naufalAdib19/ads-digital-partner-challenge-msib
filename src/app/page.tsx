"use client"
import ListBook from './component/organisms/ListBook'
import { Container, Button } from "@mui/material";
import Link from 'next/link'
import Add from '@mui/icons-material/Add'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() { 

  return (
    <Container maxWidth="md" className="py-12">
      <ToastContainer/>
          <h1 className="font-semibold text-4xl">Daftar Buku</h1>
          <hr  className="my-3 border border-slate-200"/>
          <p>Jumlah buku tersedia: </p>
          <Button className="mt-3 bg-blue-500" variant="contained" color="primary" startIcon={<Add/>}>
              <Link href="/add-book">Tambah Buku</Link>
          </Button>
          <div className="mt-4 w-full flex justify-center">
              <ListBook/>
          </div>
      </Container>
  )
}
