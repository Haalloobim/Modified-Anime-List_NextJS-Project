import NextAuth from "next-auth";
import githubAuth from "next-auth/providers/github";

const authOptions = {
    providers: [
        githubAuth(
            cli
        )
    ]
}


const handler = NextAuth()