"use client"

// import { connect, client } from "@/lib/db";

export default function Home() {
    return (
        <form
            // onSubmit={async () => {
            //     await connect();
                
            //     const qury = `
            // 		INSERT INTO users (username, email, image_url)
            //         VALUES ('${res.name}', '${res.email}', '${res.image}');`
                    
            //     client.query(qury, (err, result) => {
            //         if (err) console.error(err)
            //         console.log(result)
            //     });
                
                
                    
            // }}
        >
            <button type="submit">
                SAVE TO DATABASE
            </button>
        </form>
    )
}