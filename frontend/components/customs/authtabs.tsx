"use client"
import React from 'react'
import { Tabs, TabsContent,TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { FieldGroup, FieldLegend, FieldSet,FieldDescription,FieldContent,FieldLabel, Field } from '../ui/field'
import { Input } from '../ui/input'
import { Button } from '@base-ui/react'


interface authtabsprops {
    className?:string,
}
export default function AuthTabs(props:authtabsprops) {
  return (
    <div className={cn('',props.className)}>
         <div className=''>
            <Tabs className='w-full text-bcolor bg-tcolor rounded-lg shadow-lg p-4'>

                <TabsList className='w-full text-center flex  bg-white/40 hover:bg-white/40 h-4'>
                    <TabsTrigger value="sign-in" 
                    className='w-full text-xs text-white capitalize '>sign in</TabsTrigger>
                    <TabsTrigger value="sign-up" className='w-full text-white text-xs capitalize'>sign up</TabsTrigger>
                </TabsList>

                {/* tabs for sign in */}
                <TabsContent value={'sign-in'}  className={''}>
                    <form className='p-4'>
                        <FieldGroup className='flex flex-col gap-2'>
                            <FieldSet className='flex flex-col p-0'>
                                <FieldLegend className='text-xl font-extrabold text-center'>
                                    <span className='font-extrabold text-white/40'>
                                        Open
                                    </span>
                                    <span className='capitalize text-red-300'>
                                        labs
                                    </span>

                                </FieldLegend>
                                <FieldDescription  className='text-center text-xs tracking-wider  text-white capitalize'>
                                    Openlabs attendance app
                                </FieldDescription>
                                <FieldGroup className='p-0 space-y-0'>
                                    <Field className='flex flex-col '>
                                        <FieldLabel 
                                        className='text-xs capitalize tracking-wide text-white'
                                        htmlFor='username'>username</FieldLabel>
                                        <Input
                                            id="username"
                                            className="bg-white text-black caret-tcolor"
                                        />
                                    </Field>
                                    <Field>
                                        <FieldLabel 
                                        className='text-xs capitalize tracking-wide text-white'
                                        htmlFor='password'>password</FieldLabel>
                                        <Input
                                            id="password"
                                            className="bg-white text-black caret-tcolor"
                                            type="password"
                                        />
                                    </Field>
                                    <Field>
                                        <div className='flex items-center justify-center'>
                                            <Button className={' w-full  rounded-lg text-white capitalize tracking-wider bg-white/40 font-bold'}>
                                                sign in
                                            </Button>
                                        </div>
                                    </Field>
                                </FieldGroup>
                            </FieldSet>
                        </FieldGroup>
                    </form>
                </TabsContent>

                {/* tabs for sign up */}
                <TabsContent value={'sign-up'}>
                <form className='p-4'>
                        <FieldGroup className='flex flex-col gap-2'>
                            <FieldSet className='flex flex-col p-0'>
                                <FieldLegend className='text-xl font-extrabold text-center'>
                                    <span className='font-extrabold text-white/40'>
                                        Open
                                    </span>
                                    <span className='capitalize text-red-300'>
                                        labs
                                    </span>

                                </FieldLegend>
                                <FieldDescription  className='text-center text-xs tracking-wider  text-white capitalize'>
                                    Openlabs attendance app
                                </FieldDescription>
                                <FieldGroup className='p-0 space-y-0'>
                                <Field>
                                        <FieldLabel 
                                        className='text-xs capitalize tracking-wide text-white'
                                        htmlFor='email'>email</FieldLabel>
                                        <Input
                                            id="email"
                                            className="bg-white text-black caret-tcolor"
                                            type="email"
                                        />
                                    </Field>
                                    
                                    <Field className='flex flex-col '>
                                        <FieldLabel 
                                        className='text-xs capitalize tracking-wide text-white'
                                        htmlFor='username'>username</FieldLabel>
                                        <Input
                                            id="username"
                                            className="bg-white text-black caret-tcolor"
                                        />
                                    </Field>
                                    <Field>
                                        <FieldLabel 
                                        className='text-xs capitalize tracking-wide text-white'
                                        htmlFor='password'>password</FieldLabel>
                                        <Input
                                            id="password"
                                            className="bg-white text-black caret-tcolor"
                                            type="password"
                                        />
                                    </Field>
                                    <Field>
                                        <div className='flex items-center justify-center'>
                                            <Button className={' w-full  rounded-lg text-white capitalize tracking-wider bg-white/40 font-bold'}>
                                                sign in
                                            </Button>
                                        </div>
                                    </Field>
                                </FieldGroup>
                            </FieldSet>
                        </FieldGroup>
                    </form>
                </TabsContent>
            </Tabs>
        </div>
    </div>
  )
}
