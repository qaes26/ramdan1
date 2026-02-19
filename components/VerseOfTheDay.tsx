"use client";
import React, { useState, useEffect } from 'react';
import { BookOpen, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import versesData from '@/data/verses.json';

const VerseOfTheDay = () => {
    const [verse, setVerse] = useState(versesData[0]);
    const [timeLeft, setTimeLeft] = useState("");

    const getDailyVerse = () => {
        const today = new Date();
        const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);
        return versesData[dayOfYear % versesData.length];
    };

    useEffect(() => {
        setVerse(getDailyVerse());

        const updateTimer = () => {
            const now = new Date();
            const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
            const diff = tomorrow.getTime() - now.getTime();

            if (diff <= 1000) {
                // Determine if we need to refresh the verse (at midnight)
                setVerse(getDailyVerse());
            }

            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setTimeLeft(
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
            );
        };

        const timerId = setInterval(updateTimer, 1000);
        updateTimer(); // Initial call

        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="w-full max-w-2xl mx-auto mt-8 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-emerald-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-emerald-950/80 backdrop-blur-xl rounded-2xl p-8 border border-emerald-500/30 shadow-2xl overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <BookOpen size={120} className="text-emerald-500 transform rotate-12" />
                </div>

                {/* Header with Timer */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 relative z-10 border-b border-emerald-800/50 pb-4">
                    <div className="flex items-center gap-2 mb-2 md:mb-0">
                        <div className="p-2 bg-yellow-500/20 rounded-lg">
                            <BookOpen className="text-yellow-400" size={20} />
                        </div>
                        <h2 className="text-xl font-bold text-yellow-100 font-serif">آية اليوم</h2>
                    </div>

                    <div className="flex items-center gap-2 text-emerald-300/80 bg-emerald-900/50 px-3 py-1 rounded-full text-sm font-mono dir-ltr">
                        <Clock size={14} />
                        <span>Next verse in: {timeLeft}</span>
                    </div>
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={verse.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="text-center relative z-10"
                    >
                        <p className="text-2xl md:text-3xl font-bold text-emerald-50 leading-loose mb-6 font-serif drop-shadow-sm">
                            {verse.text}
                        </p>

                        <div className="inline-block bg-emerald-900/40 px-4 py-2 rounded-lg border border-emerald-700/30 mb-6">
                            <span className="text-emerald-300 text-sm font-semibold">{verse.surah}</span>
                        </div>

                        <div className="bg-emerald-900/30 p-4 rounded-xl border border-emerald-800/30 text-right">
                            <h4 className="text-yellow-500/90 text-sm font-bold mb-2 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                                التفسير الميسر
                            </h4>
                            <p className="text-emerald-100/80 text-base leading-relaxed">
                                {verse.tafsir}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default VerseOfTheDay;
