import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { message } = await req.json();
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { response: "API Key not configured. Please set GEMINI_API_KEY." },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-pro",
            systemInstruction: "أنت مساعد إسلامي ومؤدب ومفيد. تعتمد بشكل صارم على القرآن الكريم والسنة النبوية الصحيحة. تجيب فقط على الأسئلة المتعلقة بالإسلام والصيام والصلاة والروحانيات. إذا سأل المستخدم عن السياسة أو البرمجة أو مواضيع عامة، فاعتذر بلطف ووجه الحديث مرة أخرى إلى مواضيع رمضان."
        });

        const chat = model.startChat({
            history: [], // Could implement history if needed, but per request keeping it simple for now or managing on client
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
