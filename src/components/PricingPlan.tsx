"use client";

import React from 'react'
import { motion } from "framer-motion"
import { GradientButton } from './ui/GradientButton'
import { cn } from '@/lib/utils';
import { Calendar } from 'lucide-react';
import { IconCheck, IconX } from '@tabler/icons-react';


interface PricingPlan {
    id: string,
    name: string,
    description: string,
    orgPrice: number,
    regPrice: number,
    validity: string,
    badge?: string,
    discountPercentage: number,
    features: Features[],
    isPopular?: boolean,
    buttonText: string,
    buttonVariant: "primary" | "outline" | "secondary"

}
interface Features {
    text: string,
    included: boolean
}

const pricing: PricingPlan[] = [
    {
        id: "sprint",
        name: "Spriny Plan",
        description: "Perfect for beginners starting their coding journey.",
        orgPrice: 8999,
        regPrice: 6599,
        validity: "12 Months",
        discountPercentage: 27,
        features: [
            { text: "All features", included: true },
            { text: "Only DSA, Core & Aptitude", included: true },
            { text: "AI Doubt Support", included: false },
            { text: "Biweekly Sessions", included: false },
            { text: "Code Review", included: false },
        ],
        buttonText: "Buy now @4888",
        buttonVariant: "outline"
    },
    {
        id: "pinnacle",
        name: "Pinnacle Plan",
        description: "Go all in — with expert support & lifetime access.",
        badge: "Lifetime Validity",
        orgPrice: 11999,
        regPrice: 9120,
        discountPercentage: 24,
        validity: "Lifetime",
        features: [
            { text: "All features", included: true },
            { text: "DSA, Core, Design & Aptitude", included: true },
            { text: "AI Doubt Support", included: true },
            { text: "Biweekly Sessions", included: true },
            { text: "Code Review", included: true },
        ],
        buttonText: "Buy Now @ ₹5928",
        buttonVariant: "primary",
        isPopular: true,
    },
    {
        id: "enterprise",
        name: "Enterprise Plan",
        description:
            "Perfect for a group of people (minimum 30) who are looking for an extra discount.",
        features: [
            { text: "All features of Pinnacle", included: true },
            { text: "Performance Dashboard", included: true },
            { text: "Centralized Billing & Licensing", included: true },
            { text: "Custom Curriculum", included: true },
            { text: "Exclusive Webinars & Industry Events", included: true },
            { text: "Batch Enrollment & Role Access", included: true },
        ],
        buttonText: "Contact Us",
        buttonVariant: "secondary",
        orgPrice: 0,
        regPrice: 0,
        discountPercentage: 0,
        validity: "",
    },
]
const PricingPlans = () => {
    return (
        <div className='min-h-screen py-16'>
            <div className='max-w-6xl mx-auto px-4'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='text-center md:text-left mb-10'
                >
                    <h2 className='text-2xl lg:text-3xl font-md'>Affordable Plans for <span className='text-orange-500'>Everyone</span></h2>
                    <p className='mb-4 text-muted-foreground text-xl'>Choose the best fit for you</p>
                </motion.div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    {pricing.map((price, index) => (
                        <motion.div
                            key={price.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 2 }}
                            className={cn("relative rounded-3xl bg-secondary/30 border-4 flex flex-col p-8 transition-all duration-300 shadow-lg hover:scale-105", price.isPopular ? "border-orange-200/80 shadow-2xl md:scale-105" : "")}
                        >
                            <div>
                                {price.badge && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                                        className="absolute -top-5 left-1/2 transform -translate-x-1/2"
                                    >
                                        <div className="bg-gradient-to-r from-orange-500 to-orange-400 font-jost px-4 py-2 rounded-full text-sm font-medium">
                                            {price.badge}
                                        </div>
                                    </motion.div>
                                )}
                                <div className='mb-7'>
                                    <h2 className='text-base md:text-xl font-medium mb-2 font-jost'>{price.name}</h2>
                                    <p className='text-muted-foreground text-sm'>{price.description}</p>
                                </div>

                                {price.regPrice > 0 && (
                                    <div className="mb-8">
                                        <div className="flex items-center gap-4 mb-2">
                                            <span
                                                className={cn(
                                                    "text-lg line-through text-muted-foreground"
                                                )}
                                            >
                                                Original: ₹{price.orgPrice}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className={cn("text-lg")}>
                                                Regular: ₹{price.regPrice}
                                            </span>
                                            <span className="bg-orange-500 px-2 py-1 rounded text-sm font-medium">
                                                {price.discountPercentage}% OFF
                                            </span>
                                        </div>
                                    </div>
                                )}
                                {price.validity && (
                                    <div className='mb-6 flex items-center gap-2'>
                                        <Calendar className='w-4 h-4' />
                                        <h4 className={cn("text-md")}>Validity: {price.validity}</h4>
                                    </div>
                                )}
                                <div className='mb-8'>
                                    <h1 className={cn("font-semibold mb-4")}>What's included</h1>
                                    <ul className='space-y-4'>
                                        {price.features.map((feature, featureIndex) => (
                                            <motion.li
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: index * 2 + featureIndex * 1 }}
                                                className='flex items-center gap-3'
                                            >
                                                <div
                                                    className={cn(
                                                        "w-5 h-5 rounded-full flex items-center justify-center",
                                                        feature.included
                                                            ? "bg-orange-500"
                                                            : "bg-neutral-500"
                                                    )}
                                                >
                                                    {feature.included ? (
                                                        <IconCheck className="w-3 h-3 text-white" />
                                                    ) : (
                                                        <IconX className="w-3 h-3 text-white" />
                                                    )}
                                                </div>
                                                <span className={cn("text-sm")}>{feature.text}</span>

                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <GradientButton
                                    variant={price.isPopular ? "orange" : "white"}
                                    text={price.buttonText}
                                    className="w-full py-4 px-6 font-semibold transition-all duration-300"
                                />
                            </div>
                        </motion.div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default PricingPlans

