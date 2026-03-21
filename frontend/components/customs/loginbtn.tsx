"use client"
import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

interface loginbtnprops {
    className?:string,
    label:string,
    href: string,

}
export default function LoginBtn(props:loginbtnprops) {
    const router = useRouter()
    return (
        <Button 
        onClick={() => router.push(props.href)}
        className={cn(' bg-tcolor  text-white text-[12px] tracking-wider h-6 rounded-lg shadow-lg capitalize   hover:-translate-y-0.5 hover:ease-out cursor-pointer  hover:bg-tcolor ',props.className)}>
            {props.label}
        </Button>
  )
}
