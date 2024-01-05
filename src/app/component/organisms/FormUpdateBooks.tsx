"use client"
import TextField from '@mui/material/TextField'
import { LoadingButton } from "@mui/lab";
import SendIcon from '@mui/icons-material/Send'
import { useState, useEffect } from 'react';
import { useFormik, ErrorMessage, Formik, Form, Field } from 'formik';
import * as yup from 'yup'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

type booksDataType = {
    title: string,
    description: string,
    price: number,
    author: string
}

const FormUpdateBooks = ({slug}: {slug: string | string[]}) => {
    const [isLoad, setIsLoad] = useState(false);
    const [data, setData] = useState<booksDataType>();

    function handleSubmit() {
        setIsLoad(true)
        axios.put(`https://testcasefe2023.ignorelist.com/api/v1/data/${slug}`, 
        {
            "title": formik.values.judul,
            "description": formik.values.deskripsi,
            "price": formik.values.harga,
            "author": formik.values.penulis
        },
        {
            headers: {
                "nim": "215150400111021"
            },
        }
        )
        .then(() => {
            setIsLoad(false)
            toast.success("Berhasil Mengedit Buku!", {
              position: toast.POSITION.TOP_RIGHT
            });
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        setIsLoad(true)
        axios.get(`https://testcasefe2023.ignorelist.com/api/v1/data/${slug}`, {
            headers: {
                "nim": "215150400111021"
            }
        })
        .then(res => {
            setData(res.data.data)
            setIsLoad(false)
        })
        .catch(err => console.log(err))
    }, [])

    const formik = useFormik({
        initialValues: {
            judul: "",
            deskripsi: "",
            harga: null,
            penulis: ""
        },
        onSubmit: handleSubmit,
        validationSchema: yup.object().shape({
            judul: yup.string().required(),
            harga: yup.number().required(),
            penulis: yup.string().required()
        })
    });

    
    const handleForm = (event: any) => {
        const { target } = event
        formik.setFieldValue(target.name, target.value)
    }

    return (
        <div className="">
        <ToastContainer/>
        <form onSubmit={formik.handleSubmit} className="mt-3 flex flex-col gap-y-5">
            <div>
                <TextField defaultValue={`${data == null ? '  ' : data?.title}`} error={formik.errors.judul != null} helperText={`${formik.errors.judul != null ? 'Harus diisi dulu !' : ''}`} className={`w-full`} id="judul" name="judul" variant="outlined" label="Judul" onChange={handleForm}/>
            </div>
            <div>
                <TextField defaultValue={`${data == null ? '  ' : data?.description}`} multiline={!isLoad} rows={4} className="w-full" id="deskripsi" name="deskripsi" variant="outlined" label="Deskripsi" onChange={handleForm}/>
            </div>
            <div>
                <TextField defaultValue={`${data == null ? '  ' : data?.price}`} error={formik.errors.harga != null} helperText={`${formik.errors.harga != null ? 'Harus diisi dulu !' : ''}`} className="w-full" id="harga" name="harga" variant="outlined" label="Harga" onChange={handleForm}/>
            </div>
            <div>
                <TextField defaultValue={`${data == null ? '  ' : data?.author}`} error={formik.errors.penulis != null} helperText={`${formik.errors.penulis != null ? 'Harus diisi dulu !' : ''}`} className="w-full" id="penulis" name="penulis" variant="outlined" label="Penulis" onChange={handleForm}/>
            </div>
            <LoadingButton
                size="medium"
                type="submit"
                endIcon={<SendIcon />}
                loading={isLoad}
                loadingPosition="end"
                variant="contained"
                className="bg-blue-500"
            >
                <span>Send</span>
            </LoadingButton>
        </form>
        </div>
    )
}

export default FormUpdateBooks