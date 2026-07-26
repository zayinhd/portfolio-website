"use server";

import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";

import User from "../models/User";
import { createSession, deleteSession } from "../lib/session";
import db from "../lib/db";

// import { createUser } from "./createuser";

// await createUser();

export async function login(state, formData) {
    try {
        const username = formData.get("username")?.trim();
        const password = formData.get("password");

        if (!username) return { message: "Username cannot be empty!" };
        if (!password) return { message: "Password cannot be empty!" };

        await db();

        const user = await User.findOne({ username });
        if (!user) {
            return {
                message: "User does not exist!",
            };
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return {
                message: "Incorrect password, try again!",
            };
        }

        await createSession(user._id);

        redirect("/dashboard");
    } catch (error) {
        return { message: error.message || "Login failed. Try again." };
    }
}

export async function logout() {
    deleteSession();

    return redirect("/login");
}
