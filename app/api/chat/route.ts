import { groq } from "@ai-sdk/groq";
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = streamText({
        model: groq('deepseek-r1-distill-llama-70b'),
        providerOptions: {
            groq: { reasoningFormat: 'parsed' },
        },
        system: `You are VyntrixAI, an expert AI assistant helping developers write and understand Solana smart contracts using Rust and the Anchor framework. 
Explain concepts clearly, suggest best practices, and provide step-by-step guidance with code examples. 
If a user provides an idea, help them convert it into an Anchor-based smart contract. 
Always be concise, accurate, and developer-friendly.`,
        messages
    })

    return result.toDataStreamResponse();
}