
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;

const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload){
    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("2h")
        .sign(encodedKey);
}
export async function decrypt(session){
    try{
        const {payload} = await jwtVerify(session, encodedKey, {
            algorithms: ["HS256"],
        });

        return payload;
    }catch(e){
        console.log("Failed to verify session", e);
    }
}

export async function createSession(userId){
    const expiredAt = new Date(Date.now() + 2 * 60 * 60 * 1000);
    const session = await encrypt({userId, expiredAt});
    const cookieStore = await cookies();

    cookieStore.set("session",session,{
        httpOnly: true,
        secure: true,
        expires: expiredAt,
        sameSite: "lax",
        path: "/",
    });
}