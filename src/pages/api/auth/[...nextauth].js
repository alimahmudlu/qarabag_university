import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import {LOGIN_ROUTE} from "@/admin/configs/apiRoutes";
const REQUEST_BASE_URL = process.env.NEXT_PUBLIC_REQUEST_BASE_URL;

export default NextAuth({
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'SG-adminPanel',
            credentials: {
                email: {
                    label: 'email',
                    type: 'email',
                    placeholder: 'jsmith@example.com',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                const payload = {
                    email: credentials.email,
                    password: credentials.password,
                    ttl: credentials.ttl || 100000
                }

                const res = await fetch(`${REQUEST_BASE_URL}${LOGIN_ROUTE}`, {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Language': 'az',
                        'Signature': 'KarabakhIsAzerbaijan'
                    },
                })

                const user = await res.json()

                if (!res.ok) {
                    throw new Error(`${user.message}`)
                }
                // If no error and we have user data, return it
                if (res.ok && user) {
                    return user?.data
                }

                // Return null if user data could not be retrieved
                return null
            },
        }),
    ],
    secret: 'accessToken',
    pages: {
        signIn: '/admin/sign-in',
        signOut: '/sign-out',

    },
    callbacks: {
        async jwt({account, trigger, user, token, session}) {
            if (trigger === "update") {
                return {
                    ...token,
                    ...session.user
                }
            }
            else if (account && user) {
                return {
                    ...token,
                    ...user,
                    access_token: user?.token?.access_token,
                    refresh_token: user?.token?.refresh_token,
                }
            }

            return token
        },

        async session({ session, token, trigger, newSession }) {
            session.user = {...token}
            session.user.token.access_token = token.access_token
            session.user.token.refresh_token = token.refresh_token

            return session
        }
    },
    // Enable debug messages in the console if you are having problems
    debug: process.env.NODE_ENV === 'local',
})
