import Image from 'next/image'
import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Button } from './ui/button'



const Footer = () => {
    return (
        <div className='relative bg-background text-foreground border-t mt-4'>
            <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
                <div className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-12'>
                    <div className='relative lg:col-span-2'>
                        <Image
                            width={40}
                            height={40}
                            alt='Logo'
                            src="/logo.png"
                            className='w-10 md:w-14 object-contain dark:invert-0 invert-[1]'
                        />
                        <p className='text-muted-foreground font-medium mt-4'>
                            The best place to learn data Structures, algorithms, most asked coding interview questions, real interview experiences free of cost.
                        </p>
                        <div className='flex items-center gap-4 mt-4'>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full"
                                    >
                                        <Linkedin className="h-4 w-4" />
                                        <span className="sr-only">Linkedin</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Follow on Linkedin</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full"
                                    >
                                        <Twitter className="h-4 w-4" />
                                        <span className="sr-only">Twitter</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Follow on Twitter</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full"
                                    >
                                        <Instagram className="h-4 w-4" />
                                        <span className="sr-only">Instagram</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Follow on Instagram</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full"
                                    >
                                        <Facebook className="h-4 w-4" />
                                        <span className="sr-only">Facebook</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Follow on facebook</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                        <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                    </div>
                    <div>
                        <h3 className='text-orange-500 text-lg mb-4 font-semibold'>Company</h3>
                        <nav className='space-y-2 text-sm'>
                            <a
                                href="#"
                                className="block transition-colors hover:text-primary"
                            >
                                About Us
                            </a><a
                                href="#"
                                className="block transition-colors hover:text-primary"
                            >
                                Contact Us
                            </a><a
                                href="#"
                                className="block transition-colors hover:text-primary"
                            >
                                Pricing
                            </a><a
                                href="#"
                                className="block transition-colors hover:text-primary"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="block transition-colors hover:text-primary"
                            >
                                Terms and Conditions
                            </a>
                            <a
                                href="#"
                                className="block transition-colors hover:text-primary"
                            >
                                About Us
                            </a>
                        </nav>
                    </div>
                    <div>
                        <h3 className='text-orange-500 text-lg mb-4 font-semibold'>Quick Access</h3>
                        <nav className='space-y-2 text-sm'>
                            <a
                                href="#"
                                className="block transition-colors hover:text-primary"
                            >
                                Striver Dsa sheet
                            </a><a
                                href="#"
                                className="block transition-colors hover:text-primary"
                            >
                                Technical Blogs
                            </a><a
                                href="#"
                                className="block transition-colors hover:text-primary"
                            >
                                CS Subjects
                            </a><a
                                href="#"
                                className="block transition-colors hover:text-primary"
                            >

                            </a>
                            <a
                                href="#"
                                className="block transition-colors hover:text-primary"
                            >
                                Striver&aposs CP Sheet
                            </a>
                        </nav>
                    </div>
                    <div>
                        <h3 className='text-orange-500 text-lg mb-4 font-semibold'>DSA Sheets</h3>
                        <nav className='space-y-2 text-sm'>
                            <a
                                href="#"
                                className="block transition-colors hover:text-primary"
                            >
                                Striver&aposs SDE Sheet
                            </a><a
                                href="#"
                                className="block transition-colors hover:text-primary"
                            >
                                Striver&aposs A2Z DSA Playlist
                            </a><a
                                href="#"
                                className="block transition-colors hover:text-primary"
                            >
                                SDE Core Sheet
                            </a><a
                                href="#"
                                className="block transition-colors hover:text-primary"
                            >
                                Striver&aposs CP Sheet
                            </a>
                        </nav>
                        <h3 className='text-orange-500 text-lg mb-4 font-semibold mt-4'>DSA Sheets</h3>
                        <nav className='space-y-2 text-sm'>
                            <a
                                href="#"
                                className="block transition-colors hover:text-primary"
                            >
                                Array Series
                            </a><a
                                href="#"
                                className="block transition-colors hover:text-primary"
                            >
                                LinkedList Series
                            </a><a
                                href="#"
                                className="block transition-colors hover:text-primary"
                            >
                                DP Series
                            </a><a
                                href="#"
                                className="block transition-colors hover:text-primary"
                            >
                                Graph Series
                            </a>
                        </nav>
                    </div>

                </div>
                <div className='flex items-center justify-center py-4 mt-2 border-t w-full'>
                    <h2 className='text-muted-foreground text-lg'>Copyright © 2025 takeUforward | All rights reserved</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer