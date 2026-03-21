"use client"
import { appConstants } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { GraduationCap,  LucideProps } from 'lucide-react'
import React, { useState } from 'react'

interface choosepathprops{
    className?:string,
}

interface itemprops {
    label:string,
    icon:React.ComponentType<LucideProps>,
}

export default function ChoosePath(props: choosepathprops) {
    const [pathlist , setPathList] = useState<itemprops[]>(appConstants.careerpath);
    
  return (
    <section className={cn('bg-tcolor p-4 py-10',props.className)}>
        <div className='flex flex-col items-center gap-4 md:gap-6'>
                <div className='bg-white/40  flex  items-center gap-2 px-2  rounded-lg h-6 justify-center text-white'>
                    <div className=''>
                        <GraduationCap className='text-tcolor  ' stroke="" fill="orange"/>
                    </div>
                    <p className='capitalize text-xxs text-white  tracking-wider font-extrabold'>
                        premium education
                    </p>
                </div>

                {/* the paragraph */}
                <div className='flex flex-col gap-2 text-center text-white'>
                    <h2 className='text-xl capitalize font-extrabold'>choose your path to success</h2>
                    <p className='text-xxs tracking-wider max-w-xs'>
                    Explore our comprehensive range of industry-leading courses designed to transform your career and unlock new opportunities in the digital world. 
                    </p>
                </div>

                {/* list paths */}
                <div className='grid grid-cols-2   lg:grid-cols-6 gap-4 md:max-w-[80%]'>
                    {
                        pathlist.map((item) => {
                            return (
                            <div
                                key={item.label}
                                className={'flex items-center justify-center rounded-lg gap-2 p-2 bg-white/40'}
                            >
                                <div className='bg-tcolor rounded-lg p-1'>
                                    <item.icon size={20} className='text-white'/>
                                </div>
                                <div className='text-white capitalize text-xxs tracking-wider'>
                                    {item.label}
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
        </div>
    </section>
  )
}
