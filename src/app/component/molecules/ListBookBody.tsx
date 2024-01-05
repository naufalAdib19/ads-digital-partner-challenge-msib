import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Button from '@mui/material/Button'
import { booksType } from '@/services/getData'
import { useState } from 'react'
import DeleteModals from './DeleteModals'

type propsType = {
    page: number,
    rowsPerPage: number
}

const ListBookBody = ({props, data}: {props: propsType, data: booksType}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [id, setId] = useState<number>(0);

    return (
        <>
        <TableBody>
            {
            (props.rowsPerPage > 0
            ? data.slice(props.page * props.rowsPerPage, props.page * props.rowsPerPage + props.rowsPerPage)
            : data
            ).map((data: any) => {
                    return(
                        <TableRow key={data.id}>
                            <TableCell className='cursor-pointer' onClick={() => window.location.href = 'book/' + data.id}>{data.title}</TableCell>
                            <TableCell className='cursor-pointer' onClick={() => window.location.href = 'book/' + data.id}>{data.description}</TableCell>
                            <TableCell>{data.price}</TableCell>
                            <TableCell>{data.author}</TableCell>
                            <TableCell>
                                <div className='flex flex-col gap-y-2'>
                                    <Button size='small' variant='contained' color='success' className='bg-green-600'
                                    onClick={() => window.location.href = '/update-book/' + data.id}>Ubah</Button>
                                    <Button 
                                        size='small' 
                                        variant='contained' 
                                        color='error' 
                                        className='bg-red-600'
                                        onClick={() => {
                                            setIsOpen(true)
                                            setId(data.id)
                                        }}
                                    >
                                        Hapus
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    )
                })
            }
        </TableBody>
        <DeleteModals props={{
            open: isOpen,
            setOpen: setIsOpen,
            id: id
        }}/>
        </>
        
    )
}

export default ListBookBody