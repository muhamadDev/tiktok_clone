import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [GitHub],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            try {
                const res = await fetch("http://localhost:3000/api/db/createUser", {
                    method: "POST",
                    headers: {"Content-type": "application/json"},
                    body: JSON.stringify(user)
                });
                
                const d = await res.text();
                console.log(d)
            } catch(err) { console.log(err)}
            
            return true;
        }
    }
})