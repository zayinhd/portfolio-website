// pages/api/email.js
import nodemailer from "nodemailer";
import { userEmail, userPass } from "/api/config";
import Cors from "cors";

// Initializing the cors middleware
const cors = Cors({
    methods: ["POST"], // Allow only POST requests
});

// Helper method to make sure cors is used in the route
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

export default async function handler(req, res) {
    await runMiddleware(req, res, cors);

    if (req.method === "POST") {
        try {
            // Create a Nodemailer transporter using Gmail credentials
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: userEmail,
                    pass: userPass,
                },
            });

            const { name, email, subject, message } = req.body;

            // Send the email using Nodemailer
            const info = await transporter.sendMail({
                from: `"Contact: " ${email}`, // Sender's email address
                to: userEmail,
                subject: `"Subject: " ${subject}`,
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            });

            console.log("Email sent:", info.response);

            res.status(200).json({
                success: true,
                message: "Email sent successfully!",
            });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({
                success: false,
                message: "Failed to send email.",
            });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
