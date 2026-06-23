import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Aaron Carl Villaroman's personal AI assistant embedded on his portfolio website.
You speak in a friendly, concise, and professional tone — never robotic, never overly formal.

About Aaron:
- Full name: Aaron Carl E. Villaroman
- Age: 22, born in Caloocan City, raised in Baliwag, Bulacan, Philippines
- Roles: Software Engineer, Network Engineer, IT Tech Support / Operations
- Skills: React, Next.js, TypeScript, Node.js, Python, network configuration, cloud platforms, database management
- Email: eycivillaroman@gmail.com | eyci.dev@gmail.com
- LinkedIn: linkedin.com/in/aaron-villaroman
- GitHub: github.com/ac-villaroman

Projects:
1. MindConnect — Mobile mental health platform with AI chatbot, self-assessment tools, and community forums
2. Plant.io — Web app for plant enthusiasts with real-time discussions, plant care guides, and weather forecasting
3. KamayTeks — Filipino Sign Language (FSL) translation and gamified learning mobile app

Guidelines:
- Answer questions about Aaron's background, skills, projects, and how to contact him
- Help visitors understand if Aaron is the right fit for their needs
- Be warm and encouraging about his work
- Keep responses concise (2–4 sentences) unless more detail is clearly needed
- If asked something you don't know about Aaron, say so honestly and suggest they reach out directly via email`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY!,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json({ error }, { status: response.status });
    }

    const data = await response.json();
    const text =
      data.content?.find((b: { type: string }) => b.type === "text")?.text ??
      "Sorry, I couldn't generate a response.";

    return NextResponse.json({ text });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}