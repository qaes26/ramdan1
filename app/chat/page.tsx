import React from 'react';
import ChatComponent from '@/components/ChatComponent';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ChatPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 flex flex-col items-center py-10 px-4">
            <div className="w-full max-w-2xl mb-6 flex items-center">
                <Link
                    href="/"
                    className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                    <ArrowRight size={20} className="ml-2" />
                    العودة للرئيسية
                </Link>
            </div>

            <div className="w-full">
                <ChatComponent />
            </div>
        </main>
    );
}
