"use server";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import Session from "../models/Session";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("7d")
        .sign(encodedKey);
}

export async function decrypt(session) {
    try {
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ["HS256"],
        });
        return payload;
    } catch (error) {
        console.log("Failed to verify session");
    }
}

export async function createSession(userId) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    const session = await Session.create({
        userId,
        expiresAt,
    });

    const sessionId = session._id;

    const encryptedSession = await encrypt({ sessionId, expiresAt });

    const cookieStore = await cookies();

    cookieStore.set("session", encryptedSession, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        expires: expiresAt,
        sameSite: "lax",
        path: "/",
    });
}

export async function updateSession() {
    // const newExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    // const session = await Session.findByIdAndUpdate(
    //     sessionId,
    //     { expiresAt: newExpiresAt },
    //     { new: true }
    //   );

    //   if (!session) {
    //     throw new Error('Session not found');
    //   }

    const session = await cookies.get("session")?.value;
    const payload = await decrypt(session);

    if (!session || !payload) {
        return null;
    }

    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)(
        await cookies(),
    ).set("session", session, {
        httpOnly: true,
        secure: true,
        expires: expires,
        sameSite: "lax",
        path: "/",
    });
}

export async function deleteSession() {
    const cookieStore = await cookies();
    cookieStore.delete("session");
}
