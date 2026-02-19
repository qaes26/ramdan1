import React from 'react';
import Link from 'next/link';
import { Moon, BookOpen, MessageCircle } from 'lucide-react';
import WorshipTracker from '@/components/WorshipTracker';
import FastingActions from '@/components/FastingActions';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>

        <div className="z-10 animate-fade-in-down">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-emerald-800/50 rounded-full border border-yellow-500/30 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
              <Moon size={48} className="text-yellow-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-50 mb-4 tracking-tight drop-shadow-md font-serif">
            رمضان <span className="text-yellow-400">مبارك</span>
          </h1>
          <p className="text-lg md:text-xl text-emerald-100/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            &quot;يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ&quot;
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/hadith"
              className="group flex items-center px-6 py-3 bg-emerald-800/40 hover:bg-emerald-700/60 border border-emerald-600/30 rounded-xl text-emerald-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <BookOpen className="ml-2 group-hover:text-yellow-400 transition-colors" size={20} />
              مجموعة الأحاديث
            </Link>
            <Link
              href="/chat"
              className="group flex items-center px-6 py-3 bg-yellow-600/20 hover:bg-yellow-600/30 border border-yellow-500/30 rounded-xl text-yellow-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <MessageCircle className="ml-2 group-hover:text-yellow-400 transition-colors" size={20} />
              المساعد الإسلامي الذكي
            </Link>
          </div>
        </div>
      </section>

      {/* Worship Tracker Section */}
      <section className="flex-1 w-full px-4 py-10 flex flex-col items-center">
        <WorshipTracker />
        <FastingActions />
      </section>

      <Footer />
    </main>
  );
}
