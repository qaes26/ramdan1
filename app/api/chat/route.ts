import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        // 1. تجميع المفاتيح الخمسة واختيار واحد عشوائياً لتوزيع الحمل
        const allKeys = [
            process.env.GEMINI_API_KEY_1,
            process.env.GEMINI_API_KEY_2,
            process.env.GEMINI_API_KEY_3,
            process.env.GEMINI_API_KEY_4,
            process.env.GEMINI_API_KEY_5,
        ];

        // تصفية المفاتيح للتأكد من وجود قيم فيها
        const validKeys = allKeys.filter((key) => key && key.trim() !== "");

        if (validKeys.length === 0) {
            return NextResponse.json(
                { response: "API Keys not configured. Please set GEMINI_API_KEY_1 through 5." },
                { status: 500 }
            );
        }

        const apiKey = validKeys[Math.floor(Math.random() * validKeys.length)];

        // 2. تحديث قائمة الموديلات لإضافة Gemini 2.5 Flash
        const models = [
            "gemini-1.5-flash", 
            "gemini-1.5-pro",   
            "gemini-2.0-flash", 
            "gemini-2.5-flash", // تمت الإضافة بناءً على الصورة الخاصة بك
        ];

        // اختيار موديل عشوائي عند كل طلب
        const selectedModelName = models[Math.floor(Math.random() * models.length)];

        const genAI = new GoogleGenerativeAI(apiKey);
        
        // إعداد الموديل المختار
        const model = genAI.getGenerativeModel({
            model: selectedModelName,
            systemInstruction: "أنت مساعد إسلامي ومؤدب ومفيد. تعتمد بشكل صارم على القرآن الكريم والسنة النبوية الصحيحة. تجيب فقط على الأسئلة المتعلقة بالإسلام والصيام والصلاة والروحانيات. إذا سأل المستخدم عن السياسة أو البرمجة أو مواضيع عامة، فاعتذر بلطف ووجه الحديث مرة أخرى إلى مواضيع رمضان."
        });

        const chat = model.startChat({
            history: [], 
        });

        const result = await chat.sendMessage(message);
        const response = result.response.text();

        return NextResponse.json({ response });
    } catch (error) {
        console.error("Gemini API Error:", error);
        return NextResponse.json(
            { response: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
