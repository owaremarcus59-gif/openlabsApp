"use client"
import { cn } from '@/lib/utils'
import { Code, CreditCard, Earth, Globe, Globe2, Laptop, Settings, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

interface statementprops {
    className?:string
}
export default function Statement(props:statementprops) {
  return (
    <section className={cn('w-full md:max-w-[80%] md:mx-auto md:flex space-y-4 z-30 pt-5 md:items-center gap-4 md:justify-evenly p-4  ',props.className)}>
        {/* the text section  */}
        <div>

        {/* first rating comment */}
        <div className='flex items-center justify-center gap-2 bg-tcolor  rounded-lg p-2 h-6'>
            <div>
                <Star size={16} className='' fill='orange' stroke='orange'/>
            </div>
            <div className='text-xxs capitalize tracking-wider text-white'>
                no  experience? no problem.
            </div>
        </div>


        <div className='text-center py-3'>
            <div className='capitalize'>
                <span className='capitalize font-extrabold text-2xl tracking-wide'>
                    just 
                </span> {" "}
                <span className='capitalize font-extrabold text-tcolor text-2xl tracking-wide'>
                    Big 
                </span><br/>
                <span className='capitalize font-extrabold  text-pcolor text-2xl tracking-wide'>
                    Dreams.
                </span>
            </div>
            <p className='text-slate-400 tracking-wider text-xxs py-3'>
                whether you're fresh out of SHS,<br/>
                switching careers,or chasing your<br/>
                passion for tech --- OpenLabs is<br/>
                where it begins.
            </p>
        
        </div>
        <div className='flex items-center bg-tcolor  p-2 rounded-lg justify-center gap-2 h-6'>
            <div className='flex items-center '>
                <Earth className='text-xs' size={20} fill='orange' stroke='orange'/>
            </div>
            <p className='text-xxs text-white capitalize tracking-wide'>
                Study from anywhere
            </p>
        </div>

        {/* the list  */}
        <div className='flex flex-col gap-4 items-center pt-5'>
            <div className='flex items-center text-xs gap-2 '>
                <Code className='bg-tcolor  rounded-lg text-white p-1 text-xl'/>
                <p className='text-xxs'>Hands-On Learning from Day One</p>
            </div>

            <div className='flex items-center text-xs gap-2 '>
                <Laptop className='bg-tcolor  rounded-full text-white p-1 text-xl'/>
                <p className='text-xxs'>Campus + Online Learning Options</p>
            </div>

            <div className='flex items-center text-xs gap-2'>
                <Settings className='bg-tcolor text-white p-1 rounded-full'/>
                <p className='text-xxs'>Industry-Recognized Certificates</p>
            </div>

            <div className='flex items-center text-xs gap-2'>
                <CreditCard className='bg-tcolor rounded-full text-white p-1'/>
                <p className='text-xxs'>Flexible Payment Plan Available</p>
            </div>

            <div className='flex text-xs gap-2'>
                <Button className="text-[12px] h-6 capitalize tracking-wide text-white  bg-tcolor hover:bg-tcolor shadow-lg">start your journey</Button>
                <Button className="text-[12px] h-6 capitalize tracking-wide  bg-white shadow-lg hover:bg-white text-tcolor">explore courses</Button>
            </div>
        </div>
    </div>

    {/* the image section */}
    <div className="hidden md:block">
        <Image
            alt='image'
            src="/des2.jpg"
            width={500}
            height={500}
            className='object-cover'
        />
    </div>
    </section>
  )
}
