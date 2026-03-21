import { appConstants } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../ui/sheet'
import { Menu } from 'lucide-react'

interface mobilenavprops{
    className?:string,
}

export default function MobileNav(props:mobilenavprops) {
  return (
    <div className={cn('',props.className)}>
        <Sheet>
            <SheetTrigger >
                    <Menu className='text-tcolor font-extrabold'/>
            </SheetTrigger>
            <SheetContent side={'left'} className="w-full bg-tcolor/80  pt-6">      
                <div className='flex flex-col items-center   gap-4 py-6 '>
                    {appConstants.navlist.map((item,index) => {
                    return (
                        <Link
                        key={index} 
                        href={item.href}
                        className='uppercase tracking-wide text-xs hover:underline  hover:underline-offset-4 hover:text-white hover:font-bold'
                        >
                        {item.label}
                    </Link>)
                })}
            </div>
        </SheetContent>
    </Sheet>
    </div>
  )
}
