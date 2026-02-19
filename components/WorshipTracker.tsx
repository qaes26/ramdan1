"use client";
import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const TASKS = [
    "صلاة الضحى (ركعتين)",
    "قراءة سورة الملك قبل النوم",
    "صدقة (ولو بشق تمرة)",
    "قراءة جزء من القرآن",
    "صلاة التهجد",
    "أذكار الصباح",
    "أذكار المساء",
    "صلاة التراويح",
    "إفطار صائم",
    "الاستغفار 100 مرة"
];

const WorshipTracker = () => {
    const [dailyTasks, setDailyTasks] = useState<string[]>([]);
    const [completed, setCompleted] = useState<boolean[]>([false, false, false]);

    const getDailyTasks = () => {
        const today = new Date();
        const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);

        const task1 = TASKS[dayOfYear % TASKS.length];
        const task2 = TASKS[(dayOfYear + 1) % TASKS.length];
        const task3 = TASKS[(dayOfYear + 2) % TASKS.length];

        return [task1, task2, task3];
    };

    useEffect(() => {
        // Initial setup
        setDailyTasks(getDailyTasks());

        const scheduleRefresh = () => {
            const now = new Date();
            const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
            const timeUntilMidnight = tomorrow.getTime() - now.getTime();

            return setTimeout(() => {
                setDailyTasks(getDailyTasks());
                setCompleted([false, false, false]);
                // Schedule next refresh recursively
                scheduleRefresh();
            }, timeUntilMidnight);
        };

        const timerId = scheduleRefresh();
        return () => clearTimeout(timerId);
    }, []);

    const toggleTask = (index: number) => {
        const newCompleted = [...completed];
        newCompleted[index] = !newCompleted[index];
        setCompleted(newCompleted);
    };

    return (
        <div className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-emerald-100/20 shadow-xl">
            <h3 className="text-xl font-bold text-emerald-100 mb-4 text-center font-serif">أهداف العبادة اليومية</h3>
            <div className="space-y-3">
                {dailyTasks.map((task, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={cn(
                            "flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300",
                            completed[index] ? "bg-emerald-800/40" : "bg-emerald-900/20 hover:bg-emerald-800/30"
                        )}
                        onClick={() => toggleTask(index)}
                    >
                        <div className={cn("ml-3 transition-colors", completed[index] ? "text-emerald-400" : "text-emerald-600/50")}>
                            {completed[index] ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                        </div>
                        <span className={cn(
                            "text-lg font-medium transition-all duration-300",
                            completed[index] ? "text-emerald-300 line-through opacity-70" : "text-emerald-50"
                        )}>
                            {task}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default WorshipTracker;
