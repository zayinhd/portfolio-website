"use server"

import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        expiresAt: { type: Date, required: true },
    },
    { timestamps: true }
);

// const Session = mongoose.model("Session", sessionSchema);

const Session =
    mongoose.models.Session || mongoose.model("Session", SessionSchema);

export default Session;
