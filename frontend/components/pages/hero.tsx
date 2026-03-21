import React from 'react'
import { Button } from '../ui/button'
import { Award } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface heroprops {
    className?:string,
}

export default function Hero(props:heroprops) {
  return (
    <section className={cn('relative overflow-hidden h-screen z-0 w-full',props.className)}>
        <div className='max-w-full absolute inset-0'>
            <Image
                className='w-full h-screen object-cover'
                alt=''
                src={"/hero1.jpg"}
                width={1200}
                height={800}
            />
        </div>
        {/* dark overlay on the image */}
        <div className='absolute inset-0 z-10 bg-black/60 h-screen'>

        </div>
        <div className='font-sans absolute inset-0 pt-10  z-20 max-w-full flex flex-col md:pt-20  text-white  p-4  space-y-2 md:space-y-2 '>
            <div className=' max-w-60 text-xs tracking-wide uppercase bg-tcolor p-1 justify-center bg-linear-to-l flex to-pcolor  rounded-xl  items-center'
            >
                <div className=''><Award className='text-white text-xs' size={16}/></div>
                <div className='text-white text-[12px]'>
                    ghana's premier it education hub
                </div>
            </div>
            <p className='text-3xl md:text-2xl max-w-xs font-extrabold capitalize tracking-wide '>
                transform your future<br/> through  technology.
            </p>
            <p className='max-w-xs text-xxs text-wrap tracking-wide leading-4 px-2'>
                Discover world-class Certificate and Diploma programs
                designed for  <br/> African 
                talent.Join thousands of successful graduates building  <br/> careers  with top global companies across Africa and beyond.
            </p>
            <div className='flex max-w-xs  gap-4 '>
                <Button className="text-[12px] rounded-lg text-white capitalize h-6 shadow-lg hover:-translate-y-0.5 hover:ease-out cursor-pointer bg-tcolor hover:bg-tcolor">apply now</Button>
                <Button className="text-[12px] rounded-lg  shadow-lg hover:-translate-y-0.5 capitalize hover:ease-out cursor-pointer h-6 bg-white text-tcolor hover:bg-white">
                    explore programs</Button>
            </div>
        </div>
</section>
  )
}
