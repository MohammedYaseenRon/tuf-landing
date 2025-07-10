"use client";

import React, { useState } from 'react'
import { cn } from '@/lib/utils';
import { Menu, MenuItem, ProductItem } from './ui/NavbarMenu';
import { ThemeSwitcher } from './ThemeToggle';
import Link from 'next/link';
import { GradientButton } from './ui/GradientButton';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

const Navbar = () => {
    const [active, setActive] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='fixed top-0 left-0 w-full z-50'>
            <div className={cn("py-2 flex md:mt-4 items-center justify-between max-w-6xl mx-auto px-3 md:px-5 rounded-xl bg-white/40 md:rounded-2xl backdrop-blur-md dark:bg-black/40 border shadow-lg transition-all duration-300"
            )}>
                <div className='flex items-center gap-2 py-2 md:py-4 px-1 md:px-2 rounded-md'>
                    <Image
                        width={40}
                        height={40}
                        alt='Logo'
                        src="/logo.png"
                        className='w-10 md:w-14 object-contain dark:invert-0 invert-[1]'
                    />
                </div>

                {/* Dekstop navigation */}
                <div className='hidden lg:flex items-center gap-6'>
                    <Menu setActive={setActive}>
                        <MenuItem setActive={setActive} active={active} item='Courses'>
                            <div className='grid grid-cols-2 text-sm gap-6 p-4'>
                                <ProductItem
                                    title="Striver's DSA Sheet"
                                    href="/courses/dsa-sheet"
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop&crop=center"
                                    description="Complete DSA for interviews"
                                />
                                <ProductItem
                                    title="System Design Sheet"
                                    href="/courses/system-design"
                                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop&crop=center"
                                    description="Design better systems"
                                />
                                <ProductItem
                                    title="Core Subjects"
                                    href="/courses/core-subjects"
                                    src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=200&fit=crop&crop=center"
                                    description="Build strong fundamentals"
                                />
                                <ProductItem
                                    title="Interview Experiences"
                                    href="/courses/interview-experiences"
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&crop=center"
                                    description="Learn from others' journeys"
                                />
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Practices">
                            <div className='grid grid-cols-1 min-w-[200px] gap-4 p-4 text-sm'>
                                <a href="/practice/dsa"
                                    className='block p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded'
                                >
                                    <h4 className='font-semibold text-black dark:text-white'>Dsa Practice</h4>
                                    <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                                        Solve coding problems
                                    </p>
                                </a>
                                <a href="/practice/contest"
                                    className='block p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded'
                                >
                                    <h4 className='font-semibold text-black dark:text-white'>Coding Contest</h4>
                                    <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                                        Practice Coding Contest
                                    </p>
                                </a>
                                <a href="/practice/interview-prep"
                                    className='block p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded'
                                >
                                    <h4 className='font-semibold text-black dark:text-white'>Interview Prep</h4>
                                    <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                                        Practice Interview Questions
                                    </p>
                                </a>
                            </div>

                        </MenuItem>
                    </Menu>
                    <Link href="/about"
                        className="text-muted-foreground dark:text-neutral hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                    >
                        About
                    </Link>

                    <ThemeSwitcher />
                    <div className='flex items-center gap-2'>
                        <GradientButton text='Login' size='sm' variant='orange' />
                    </div>
                </div>
                <div className='lg:hidden flex items-center gap-6'>
                    <ThemeSwitcher />
                    <GradientButton text='Login' size='sm' variant='orange' />
                    <button className="p-2 rounded-md hover:bg-secondary transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='lg:hidden fixed inset-0  bg-black/50 z-20'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <div className='fixed right-0 top-0 h-full w-64 bg-background border-l shadow-lg p-4 overflow-y-auto'>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-semibold">Menu</h2>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 hover:bg-secondary rounded-md transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold mb-2 text-orange-500">Courses</h3>
                                    <div className="space-y-2 ml-4">
                                        <Link href="/courses/dsa-sheet" className="block py-2 text-sm hover:text-orange-500 transition-colors">
                                            Striver&aposs DSA Sheet
                                        </Link>
                                        <Link href="/courses/system-design" className="block py-2 text-sm hover:text-orange-500 transition-colors">
                                            System Design Sheet
                                        </Link>
                                        <Link href="/courses/core-cs" className="block py-2 text-sm hover:text-orange-500 transition-colors">
                                            Core Subjects
                                        </Link>
                                        <Link href="/courses/interview-experiences" className="block py-2 text-sm hover:text-orange-500 transition-colors">
                                            Interview Experiences
                                        </Link>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-2 text-orange-500">Practice</h3>
                                    <div className="space-y-2 ml-4">
                                        <Link href="/practice/dsa" className="block py-2 text-sm hover:text-orange-500 transition-colors">
                                            DSA Practice
                                        </Link>
                                        <Link href="/practice/contests" className="block py-2 text-sm hover:text-orange-500 transition-colors">
                                            Contests
                                        </Link>
                                        <Link href="/practice/interview" className="block py-2 text-sm hover:text-orange-500 transition-colors">
                                            Interview Prep
                                        </Link>
                                    </div>
                                </div>

                                <Link href="/about" className="bl   ock py-2 font-medium hover:text-orange-500 transition-colors">
                                    About
                                </Link>
                            </div>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>

    )
}

export default Navbar