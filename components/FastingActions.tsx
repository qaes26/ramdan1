"use client";
import React, { useState } from 'react';
import { Check, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const ACTIONS = [
    "المحافظة على الصلوات في وقتها",
    "قراءة أذكار الصباح والمساء",
    "قراءة ما تيسر من القرآن الكريم",
    "الدعاء عند الإفطار",
    "حفظ اللسان عن الغيبة والنميمة",
    "مساعدة الأهل في المنزل",
    "التبسم وإفشاء السلام",
    "كثرة الاستغفار والصلاة على النبي"
];

const FastingActions = () => {
    const [completed, setCompleted] = useState<boolean[]>(new Array(ACTIONS.length).fill(false));

    const toggleAction = (index: number) => {
        const newCompleted = [...completed];
        newCompleted[index] = !newCompleted[index];
        setCompleted(newCompleted);
    };

    return (
        <div className="w-full max-w-md mx-auto mt-8 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-yellow-500/20 shadow-xl">
            <div className="flex items-center justify-center mb-6">
                <Heart className="text-yellow-500 mr-2" size={24} />
                <h3 className="text-xl font-bold text-yellow-100 text-center font-serif">أعمال الصائم اليومية</h3>
                <Heart className="text-yellow-500 ml-2" size={24} />
            </div>

            <div className="space-y-3">
                {ACTIONS.map((action, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={cn(
                            "flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 border border-transparent",
                            completed[index]
                                ? "bg-yellow-600/20 border-yellow-500/30"
                                : "bg-emerald-900/40 hover:bg-emerald-800/50"
                        )}
                        onClick={() => toggleAction(index)}
                    >
                        <div className={cn(
                            "ml-3 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                            completed[index]
                                ? "bg-yellow-500 border-yellow-500 text-emerald-950"
                                : "border-emerald-600/50 text-transparent"
                        )}>
                            <Check size={14} strokeWidth={3} />
                        </div>
                        <span className={cn(
                            "text-lg transition-all duration-300",
                            completed[index] ? "text-yellow-100/70 line-through" : "text-emerald-50"
                        )}>
                            {action}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FastingActions;
