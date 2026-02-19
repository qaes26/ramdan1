"use client";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import hadithsData from '@/data/hadiths.json';
import HadithCard from '@/components/HadithCard';

export default function HadithPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 flex flex-col py-10 px-4 md:px-8">
            <div className="max-w-6xl mx-auto w-full">
                <div className="flex items-center mb-8">
                    <Link
                        href="/"
                        className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors ml-4"
                    >
                        <ArrowRight size={24} />
                    </Link>
                    <h1 className="text-3xl font-bold text-emerald-50 font-serif">مجموعة الأحاديث الصحيحة</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {hadithsData.map((hadith, index) => (
                        <HadithCard key={hadith.id} hadith={hadith} index={index} />
                    ))}
                </div>
            </div>
        </main>
    );
}
