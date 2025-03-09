import React from 'react'
import {createPortal} from "react-dom"
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({onClose, isOpen, children}) => {

    return createPortal(
        <>
        {isOpen && (
           <>
           <div className='absolute top-8 grid z-50 h-screen w-screen backdrop-blur'>
            <div className='relative z-60 m-auto min-h-[200px] min-w-[80%] bg-white p-4'>
            <div className='flex justify-end'>
                <AiOutlineClose onClick={onClose} className='self-end text-2xl'/>
            </div>
            {children}
            </div>
            </div>
           </>
           )}
        </>
  , document.getElementById("modal-root") )
        
    
}

export default Modal
