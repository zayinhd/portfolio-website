"use server";

import { Resend } from "resend";

const recipient = "zayinm300@gmail.com";

export async function sendContactMessage(previousState, formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (
        typeof name !== "string" ||
        !name.trim() ||
        typeof email !== "string" ||
        !email.trim() ||
        typeof subject !== "string" ||
        !subject.trim() ||
        typeof message !== "string" ||
        !message.trim()
    ) {
        return { success: false, message: "Please complete all fields." };
    }

    if (
        name.length > 120 ||
        email.length > 254 ||
        subject.length > 160 ||
        message.length > 5000
    ) {
        return { success: false, message: "One or more fields are too long." };
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !from) {
        return {
            success: false,
            message: "Contact email is not configured yet. Please try again later.",
        };
    }

    try {
        const resend = new Resend(apiKey);
        const { error } = await resend.emails.send({
            from,
            to: recipient,
            replyTo: email.trim(),
            subject: `Portfolio contact: ${subject.trim().replace(/[\r\n]+/g, " ")}`,
            text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
        });

        if (error) {
            return {
                success: false,
                message: "Your message could not be sent. Please try again later.",
            };
        }

        return { success: true, message: "Thanks, your message has been sent." };
    } catch {
        return {
            success: false,
            message: "Your message could not be sent. Please try again later.",
        };
    }
}