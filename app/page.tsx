import React from 'react';
import Link from 'next/link';
import { Moon, BookOpen, MessageCircle } from 'lucide-react';
import RecommendedActions from '@/components/RecommendedActions';
import VerseOfTheDay from '@/components/VerseOfTheDay';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-emerald-900 via-emerald-950 to-black flex flex-col items-center">
      {/* Background Texture */}
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-5 pointer-events-none"></div>

      {/* Header / Nav */}
      <header className="w-full p-6 flex justify-between items-center z-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20 backdrop-blur-md">
            <Moon className="text-yellow-400" size={24} />
          </div>
          <h1 className="text-2xl font-bold text-emerald-50 font-serif tracking-wide">
            رفيق <span className="text-yellow-400">رمضان</span>
          </h1>
        </div>
      </header>

      <div className="w-full max-w-7xl mx-auto px-4 pb-20 flex flex-col gap-10 z-10">

        {/* Hero Section: Verse of the Day */}
        <section className="w-full">
          <VerseOfTheDay />
        </section>

        {/* Quick Access Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/hadith"
            className="group relative overflow-hidden bg-emerald-900/40 backdrop-blur-md border border-emerald-500/20 rounded-3xl p-8 transition-all duration-500 hover:bg-emerald-800/50 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-900/20"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <BookOpen size={100} className="text-emerald-400 transform -rotate-12" />
            </div>
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <BookOpen className="text-emerald-400" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emerald-50 mb-2 font-serif">مجموعة الأحاديث</h3>
                <p className="text-emerald-200/60 leading-relaxed">تصفح أحاديث نبوية صحيحة ومنتقاة لتعطير أيامك بذكر المصطفى ﷺ.</p>
              </div>
            </div>
          </Link>

          <Link
            href="/chat"
            className="group relative overflow-hidden bg-gradient-to-br from-yellow-900/20 to-emerald-900/40 backdrop-blur-md border border-yellow-500/20 rounded-3xl p-8 transition-all duration-500 hover:bg-emerald-800/50 hover:border-yellow-500/40 hover:shadow-2xl hover:shadow-yellow-900/10"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <MessageCircle size={100} className="text-yellow-400 transform rotate-12" />
            </div>
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-14 h-14 bg-yellow-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <MessageCircle className="text-yellow-400" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-50 mb-2 font-serif">المساعد الذكي</h3>
                <p className="text-yellow-100/60 leading-relaxed">اسأل المساعد الإسلامي عن الصيام، الأحكام، والأدعية في أي وقت.</p>
              </div>
            </div>
          </Link>
        </section>

        {/* Recommended Actions */}
        <RecommendedActions />

      </div>

      <Footer />
    </main>
  );
}
