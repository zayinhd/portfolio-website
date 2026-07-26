"use server";

import bcrypt from "bcryptjs";

import User from "../models/User";
import { createSession } from "../lib/session";
import db from "../lib/db";

export const createUser = async () => {
    const username = "<yourname>";
    const password = "<yourpassword>";

    await db();

    const SALT = 10;
    const hashedPassword = await bcrypt.hash(password, SALT);

    try {
        const user = await User.create({ username, password: hashedPassword });

        if (!user) {
            console.log("Error creating User");
        }

        await createSession(user._id);

        console.log("User created successfully.");
    } catch (error) {
        console.error(error);
    }
};
