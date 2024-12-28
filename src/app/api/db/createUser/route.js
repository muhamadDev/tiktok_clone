import { connect, client } from "@/lib/db";
import { auth } from "@/lib/auth"
export const config = {
  runtime: 'nodejs',
};


export async function POST(req) {
    const res = await req.json();
    const session = await auth();
    
    if(!res?.name || !res?.email || !res?.image){
        console.log("a")
        
        return new Response(JSON.stringify({err: "not authorized", session}))
    }
    
    await connect();
    
    const qury = `
		INSERT INTO users (username, email, image_url)
        VALUES ('${res.name}', '${res.email}', '${res.image}');`
        
    client.query(qury, (err, result) => {
        if (err) return new Response(JSON.stringify({err: "not authorized"}))
        return new Response(JSON.stringify(res))
    });
    
}