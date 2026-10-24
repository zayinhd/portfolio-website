"use server";

import { redirect } from "next/navigation";
import { createClient } from "../lib/supabase/server";

// const formData = {
//     email: "",
//     password: "",
// }
// export async function createUser(formData) {
//     const email = formData.get("email");
//     const password = formData.get("password");

//     if (typeof email !== "string" || !email.trim() || typeof password !== "string" || !password) {
//         return {
//             success: false,
//             message: "Enter an email address and password.",
//         };
//     }

//     try {
//         const supabase = await createClient();
//         const { data, error } = await supabase.auth.signUp({
//             email: email.trim(),
//             password,
//         });

//         if (error) {
//             return {
//                 success: false,
//                 message: "Unable to create an account with those details.",
//             };
//         }

//         return {
//             success: true,
//             message: data.session
//                 ? "Account created successfully."
//                 : "Account created. Check your email to confirm it.",
//         };
//     } catch {
//         return {
//             success: false,
//             message: "Supabase is not configured. Check your environment variables.",
//         };
//     }
// }

export async function login(previousState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email !== "string" || !email.trim() || typeof password !== "string" || !password) {
        return { message: "Enter your email and password." };
    }

    try {
        const supabase = await createClient();
        const { error } = await supabase.auth.signInWithPassword({
            email: email.trim(),
            password,
        });

        if (error) {
            return { message: "Unable to log in with those credentials." };
        }
    } catch {
        return { message: "Supabase is not configured. Check your environment variables." };
    }

    redirect("/dashboard");
}

export async function logout() {
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/login");
}