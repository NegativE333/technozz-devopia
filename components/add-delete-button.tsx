'use client'
import React from 'react'
import { Trash } from 'lucide-react'
import { useDeleteInvestmentModal } from '@/store/use-delete-investment-modal'

type Props = {
  id: string
}

const DeleteButton = ({id} : Props) => {
  const { open } = useDeleteInvestmentModal();
  return (
    <div>
      <button onClick={()=> open(id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline" >
        <Trash className='h-5 w-5 text-red-500' />
      </button>
    </div>
  )
}

export default DeleteButton