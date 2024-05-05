import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Access environment variables
const userEmail = process.env.USER_EMAIL;
const userPass = process.env.USER_PASS;

export { userEmail, userPass };
