"use client"
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import MobileNav from './mobilenav'
import LoginBtn from './loginbtn'

interface navbarprops {
    className?:string,
    navlist:any[],
}
export default function NavBar(props:navbarprops) {
  return (
    <div className={cn("flex items-center fixed w-full top-0 left-0 justify-between z-50 bg-white shadow-lg p-2 ",props.className)}>
        {/* 
            logo 
            navlist 
            actions 
        */}
        <div className='flex bg-slate-300'>
            {/* logo goes here */}
            <span className='text-pcolor'>
                open
            </span>
            <span className='text-acolor'>
                labs
            </span>
        </div>

                {/* the navlisit shown here */}
            <nav className='hidden md:flex md:gap-2 text-xs'>
                {
                    props.navlist.map((item,index) => {
                        return(<Link className='tracking-wide capitalize  hover:underline underline-acolor hover:-translate-y-0.5 text-xxs hover:text-pcolor hover:font-bold z-50 hover:ease-out hover:underline-offset-4'
                            key={index}
                            href={item.href} 
                            >
                                {item.label}
                        </Link>)
                    })
                }
            </nav>


        {/* the actions or icons tray goes here */}
        {/* <MobileNav/> */}
        <LoginBtn href='/auth' label='login' className=''/>

    </div>
  )
}
