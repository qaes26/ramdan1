import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface HadithProps {
    hadith: {
        id: number;
        source: string;
        text: string;
    };
    index: number;
}

const HadithCard = ({ hadith, index }: HadithProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
        >
            <div className="mb-4">
                <Quote className="text-yellow-500/50 group-hover:text-yellow-400 transition-colors" size={32} />
            </div>
            <p className="text-lg text-emerald-50 leading-relaxed font-light mb-4 font-serif">
                &quot;{hadith.text}&quot;
            </p>
            <div className="flex justify-end">
                <span className="text-sm font-medium text-emerald-400 bg-emerald-900/50 px-3 py-1 rounded-full">
                    {hadith.source}
                </span>
            </div>
        </motion.div>
    );
};

export default HadithCard;
