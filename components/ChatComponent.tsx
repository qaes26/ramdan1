"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type Message = {
    role: 'user' | 'model';
    text: string;
};

const ChatComponent = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        { role: 'model', text: 'السلام عليكم ورحمة الله وبركاته! أنا مساعدك الإسلامي في رمضان. اسألني عن الصيام، الصلاة، أو أي موضوع ديني.' }
    ]);
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || loading) return;

        const userMessage: Message = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input }),
            });

            if (!response.ok) throw new Error('Failed to fetch response');

            const data = await response.json();
            setMessages(prev => [...prev, { role: 'model', text: data.response }]);
        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, { role: 'model', text: 'عذراً، لا أستطيع الرد حالياً. يرجى المحاولة لاحقاً.' }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-[600px] w-full max-w-2xl mx-auto bg-emerald-950/50 backdrop-blur-sm rounded-2xl border border-emerald-800/50 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-emerald-900/80 p-4 border-b border-emerald-800 flex items-center">
                <div className="p-2 bg-emerald-800 rounded-full ml-3">
                    <Bot size={24} className="text-emerald-200" />
                </div>
                <div>
                    <h3 className="text-emerald-50 font-semibold">المساعد الإسلامي</h3>

                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-emerald-800 scrollbar-track-transparent">
                {messages.map((msg, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={cn(
                            "flex w-full",
                            msg.role === 'user' ? "justify-end" : "justify-start"
                        )}
                    >
                        <div className={cn(
                            "flex max-w-[80%] rounded-2xl p-4 shadow-sm",
                            msg.role === 'user'
                                ? "bg-emerald-700 text-white rounded-tl-none"
                                : "bg-emerald-900/80 text-emerald-50 rounded-tr-none border border-emerald-800/50"
                        )}>
                            {msg.role === 'model' && <Bot size={16} className="ml-2 mt-1 flex-shrink-0 text-emerald-400" />}
                            <p className="text-sm leading-relaxed whitespace-pre-wrap font-serif">{msg.text}</p>
                        </div>
                    </motion.div>
                ))}
                {loading && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start w-full">
                        <div className="bg-emerald-900/80 p-4 rounded-2xl rounded-tr-none border border-emerald-800/50 flex items-center">
                            <Loader2 size={16} className="animate-spin text-emerald-400 ml-2" />
                            <span className="text-emerald-400/70 text-sm">جاري الكتابة...</span>
                        </div>
                    </motion.div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-emerald-900/80 border-t border-emerald-800 flex gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="اسأل سؤالاً عن رمضان..."
                    className="flex-1 bg-emerald-950/50 border border-emerald-700 rounded-xl px-4 py-3 text-emerald-50 placeholder-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-right"
                />
                <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    className="p-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-emerald-900/20"
                >
                    <Send size={20} className="transform rotate-180" />
                </button>
            </form>
        </div>
    );
};

export default ChatComponent;
