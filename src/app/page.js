import { signIn } from "@/lib/auth"
import { Button } from "@/components/ui/button"
 
 
export default function Home() {
    return (
        <div className="flex align-centrt justify-center m-6">
            <form
                action={async () => {
                    "use server"
                    await signIn("github")
                }}
            >
                <Button type="submit">
                    Signin with GitHub
                </Button>
            </form>
            
            

    
        </div>
    )
} 