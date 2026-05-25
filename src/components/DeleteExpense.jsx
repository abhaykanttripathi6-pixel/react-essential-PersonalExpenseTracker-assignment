import React from 'react';
import Button from './Button';
import { IoTrashBin } from "react-icons/io5";

const DeleteExpense = ({ setConfirmDel, setShowModal }) => {

    return (
        <div className='p-5 grid place-content-center gap-3'>
            <div className='flex flex-col justify-center items-center'>
                <span className='text-4xl'><IoTrashBin /></span>
                <span className='text-base font-semibold'>Delete Expense?</span>
                <p className='text-sm'>This action cannot be undone.</p>
            </div>
            <div className='mx-auto text-center'>
                <Button btn={'del'} handleEvent={() => {
                    setConfirmDel(true);
                    setShowModal(false);
                }}>Delete</Button>
            </div>
        </div>
    )
}

export default DeleteExpense;
