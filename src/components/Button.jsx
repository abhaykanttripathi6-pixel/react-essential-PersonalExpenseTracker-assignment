import React from 'react'

const Button = ({children, btn, type='button', handleEvent}) => {
  
  return (
   <button type={type} className={`px-1 py-0.5 outline-none border-none text-white text-xs font-medium rounded-sm hover:scale-103 active:scale-95 duration-300 cursor-pointer  ${btn === 'del'?`bg-red-500 flex items-center gap-0.5`: btn === 'edit'?'bg-gray-400 flex items-center gap-0.5' :'px-3 py-2 bg-indigo-500'} md:px-3 md:py-2 md:text-base md:font-semibold md:rounded-md`} onClick={handleEvent}>{children}</button>
  )
}

export default Button;
