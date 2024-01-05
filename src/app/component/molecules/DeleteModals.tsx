import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Dispatch, SetStateAction } from 'react'
import Button from '@mui/material/Button'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

type propsType = {
    open: boolean, 
    setOpen: Dispatch<SetStateAction<boolean>>,
    id: number
}

const DeleteModals = ({props}: {props: propsType}) => {

    const notify = () => {
        toast.warn("Sedang Menghapus Buku!", {
          position: toast.POSITION.TOP_RIGHT
        });
    }
    const handleClose = () => props.setOpen(false)
    
    function deleteBooks() {
        notify()
        axios.delete(`https://testcasefe2023.ignorelist.com/api/v1/data/${props.id}`, {
            headers: {
                "nim": "215150400111021"
            }
        })
        .then(() => {
            toast.success("Berhasil Menghapus Buku!", {
                position: toast.POSITION.TOP_RIGHT
            });
        }).catch(() => {

        }).finally(() => {
            setTimeout(() => {
                location.reload()
            }, 2000)
        })
    }

    return (
        <>
        <ToastContainer/>
            <Modal
                open={props.open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Yakin mau hapus?
                    </Typography>
                <div className='my-4 flex gap-x-3'>
                    <Button 
                        className='bg-green-600 hover:bg-green-900' 
                        variant='contained'
                        onClick={() => {
                            deleteBooks()
                        }}
                    >
                        Iyah
                    </Button>
                    <Button 
                        className='bg-red-600 hover:bg-red-900' 
                        variant='contained'
                        onClick={() => props.setOpen(false)}>
                            Enggak
                    </Button>
                </div>
                </Box>
            </Modal>
        </>
       
    )
}

export default DeleteModals