"use client";

import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

interface VideoTab {
    id: string,
    label: string,
    title: string,
    subLabel?: string,
    videoUrl: string,
    isHighlighted?: boolean

}

const Features = () => {
    const [activeTab, setActiveTab] = useState<string>("dsa-basics");
    const [isVideModalOpen, setIsVideoModalOpen] = useState(false);


    const videosTab: VideoTab[] = [
        {
            id: "dsa-basics",
            label: "DSA (Basic to Advanced)",
            subLabel: "Pool of 1000+ problems to practice DSA",
            title: "100+ Beginner Problems",
            videoUrl: "/videos/video1.mp4"
        },
        {
            id: "lifetime-validity",
            label: "Lifetime Validity",
            subLabel: "Access the portal forever",
            title: "Unlimited Access",
            videoUrl: "/videos/video1.mp4",
        },
        {
            id: "personalized-roadmap",
            label: "Personalised roadmap",
            subLabel: "Create a roadmap based on your time",
            title: "Your Custom Learning Path",
            videoUrl: "/videos/video1.mp4",
        },
        {
            id: "core-subjects",
            label: "Core subjects",
            subLabel: "Learn DBMS, OS, CN from scratch",
            title: "Master Core Computer Science",
            videoUrl: "/videos/video1.mp4",
        },
        {
            id: "oops-module",
            label: "OOPs module end to end",
            subLabel: "Video, quiz, and problems for OOP",
            title: "Complete OOP Mastery",
            videoUrl: "/videos/video1.mp4",
            isHighlighted: true,
        },
        {
            id: "premium-problems",
            label: "Premium Problems",
            subLabel: "Get all premium problems here as well",
            title: "Exclusive Premium Content",
            videoUrl: "/videos/video1.mp4",
        },
    ]

    const currentTab = videosTab.find((tab) => tab.id === activeTab) || videosTab[0];
    const handleTab = (tab: VideoTab) => {
        setActiveTab(tab.id);

        if (window.innerWidth < 768) {
            setIsVideoModalOpen(true);
        }
    }

    return (
        <div className='min-h-screen'>
            <div className='max-w-6xl mx-auto px-4 py-8'>
                <h1 className='text-2xl lg:text-3xl font-medium'>Explore <span className='text-orange-500'>Features</span></h1>
                <div className='flex md:flex-row flex-col gap-8 min-h-[600px] rounded-lg pt-6'>
                    <div className='space-y-4 md:w-1/2 w-full'>
                        {videosTab.map((tabs) => (
                            <button
                                key={tabs.id}
                                onClick={() => handleTab(tabs)}
                                className={`w-full text-left p-4 rounded-lg transition-all hover:border-orange-300 duration-300
                                ${activeTab === tabs.id ? "bg-secondary border-1-4 border-orange-500" : "bg-secondary/50 hover:border-orange-500"} 
                                ${tabs.isHighlighted ? "border border-orange-500/50" : "border"}   
                                `}

                            >
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">
                                            {tabs.label}
                                        </h3>
                                        {/* {tabs.subLabel && ( */}
                                        <p className="text-muted-foreground text-sm">{tabs.subLabel}</p>
                                        {/* )} */}
                                    </div>
                                    <div className="flex items-center">
                                        {/* Play icon for mobile */}
                                        <svg
                                            className="w-5 h-5 text-orange-500 md:hidden"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                        {/* Arrow icon for highlighted items on desktop */}
                                        {tabs.isHighlighted && (
                                            <svg
                                                className="w-5 h-5 text-orange-500 hidden md:block"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                    {/* Desktop Video Player - Hidden on Mobile */}
                    <div className="relative w-full hidden md:block">
                        <div className="sticky top-8">
                            <div className="mb-4">
                                <h3 className="text-orange-500 text-lg font-semibold mb-2">
                                    {currentTab.title}
                                </h3>
                            </div>

                            <div className="relative rounded-3xl overflow-hidden ring-2 ring-secondary">
                                <div className="relative z-10 p-4 border-[8px] rounded-3xl overflow-hidden">
                                    <video
                                        src={currentTab.videoUrl}
                                        title={currentTab.title}
                                        className="w-full h-full scale-110"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    ></video>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-secondary/80 rounded-lg border">
                                <p className="text-muted-foreground text-sm">
                                    {currentTab.subLabel}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features