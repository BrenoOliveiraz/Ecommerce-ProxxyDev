'use client'

import React, { useState } from 'react'
import { Category } from '@/sanity.types'
import { useRouter } from 'next/navigation';

interface CategoriesSelectorProps{
    categories : Category [];
}


export default function CategoriesSelectorComponent({categories} : CategoriesSelectorProps)  {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState<string>("")
    const [router, setRouter] = useRouter()
  
    return (
    <div>CategoriesSelectorComponent</div>
  )
}
