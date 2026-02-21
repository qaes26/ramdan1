"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
    Moon,
    BookOpen,
    Heart,
    Utensils,
    Coffee,
    Tent,
    Search,
    MessageCircle,
    Smile
} from 'lucide-react';

const ACTIONS = [
    {
        icon: <Utensils size={32} />,
        title: "السحور",
        description: "أكلة بركة، ويستحب تأخيره",
        color: "text-blue-400",
        bg: "bg-blue-400/10"
    },
    {
        icon: <Coffee size={32} />,
        title: "تعجيل الفطر",
        description: "على رطبات أو تمرات أو ماء",
        color: "text-orange-400",
        bg: "bg-orange-400/10"
    },
    {
        icon: <Moon size={32} />,
        title: "قيام الليل",
        description: "صلاة التراويح والتهجد جماعة",
        color: "text-indigo-400",
        bg: "bg-indigo-400/10"
    },
    {
        icon: <BookOpen size={32} />,
        title: "تلاوة القرآن",
        description: "الإكثار من قراءته وتدبر معانيه",
        color: "text-emerald-400",
        bg: "bg-emerald-400/10"
    },
    {
        icon: <Heart size={32} />,
        title: "الصدقة والإحسان",
        description: "الجود بالمال وإطعام الطعام",
        color: "text-red-400",
        bg: "bg-red-400/10"
    },
    {
        icon: <Utensils size={32} />,
        title: "إفطار صائم",
        description: "من فطر صائماً كان له مثل أجره",
        color: "text-yellow-400",
        bg: "bg-yellow-400/10"
    },
    {
        icon: <Tent size={32} />,
        title: "الاعتكاف",
        description: "لزوم المسجد لطاعة الله في العشر الأواخر",
        color: "text-purple-400",
        bg: "bg-purple-400/10"
    },
    {
        icon: <Search size={32} />,
        title: "تحري ليلة القدر",
        description: "والاجتهاد فيها بالدعاء والعبادة",
        color: "text-teal-400",
        bg: "bg-teal-400/10"
    },
    {
        icon: <MessageCircle size={32} />,
        title: "الدعاء والذكر",
        description: "وخاصة عند الإفطار وفي الأسحار",
        color: "text-cyan-400",
        bg: "bg-cyan-400/10"
    },
    {
        icon: <Smile size={32} />,
        title: "حسن الخلق",
        description: "حفظ اللسان واجتناب الغيبة",
        color: "text-pink-400",
        bg: "bg-pink-400/10"
    }
];

const RecommendedActions = () => {
    return (
        <section className="w-full py-8">
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                    <Heart className="text-emerald-400" size={24} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-emerald-50 font-serif">الأعمال المستحبة</h2>
                    <p className="text-emerald-200/60 text-sm">سُنن ونوافل يضاعف الله بها الأجور</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {ACTIONS.map((action, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-emerald-950/20 backdrop-blur-md border border-emerald-500/10 p-6 rounded-3xl hover:bg-emerald-900/30 hover:border-emerald-500/20 transition-all duration-300 hover:-translate-y-1 group"
                    >
                        <div className="flex items-start gap-4">
                            <div className={`p-4 rounded-2xl ${action.bg} border border-white/5 transition-transform group-hover:scale-110 duration-300`}>
                                <div className={action.color}>{action.icon}</div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-emerald-50 mb-2 group-hover:text-yellow-400 transition-colors font-serif">
                                    {action.title}
                                </h3>
                                <p className="text-emerald-200/50 text-sm leading-relaxed">
                                    {action.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default RecommendedActions;
