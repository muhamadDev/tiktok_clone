import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { supabase } from "@/lib/supabase"
 
 
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [GitHub],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
                const { data, error } = await supabase.from("users").insert([{
                    username: user.name,
                    email: user.email,
                    image_url: user.image
                }]);
            return true;
        },
    }
})