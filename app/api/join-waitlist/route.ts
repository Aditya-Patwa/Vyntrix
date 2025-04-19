import { createClient } from "@/utils/supabase/server";

export async function POST(request: Request) {
    const { email } = await request.json();

    if (!email) {
        return Response.json({ error: "Email is required" }, { status: 400 });
    }

    try {
        const supabase = await createClient();

        await supabase
            .from("waitlist")
            .insert({ email: email });
        
        // if (error) {
        //     return Response.json({ error: error.message }, { status: 500 });
        // }
        return Response.json({ message: "Email added to waitlist" }, { status: 200 });
    } catch (e) {
        console.log(e);
        return Response.json({ error: "Error inserting email" }, { status: 500 });
    }
    
};