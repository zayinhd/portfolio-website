"use client";

import { useActionState } from "react";
import { sendContactMessage } from "../../actions/contact";

const ContactForm = () => {
    const [state, formAction, isPending] = useActionState(
        sendContactMessage,
        null,
    );

    return (
        <form
            action={formAction}
            className="mx-auto mt-6 grid w-full max-w-lg grid-cols-1 gap-3 p-3 text-left sm:grid-cols-2"
        >
            <label className="flex flex-col gap-1 text-sm font-medium">
                Name
                <input
                    autoComplete="name"
                    className="rounded border border-primary bg-transparent px-2.5 py-1.5 text-sm outline-none focus:ring-2 focus:ring-primary dark:border-white dark:focus:ring-white"
                    maxLength={120}
                    name="name"
                    required
                />
            </label>
            <label className="flex flex-col gap-1 text-sm font-medium">
                Email
                <input
                    autoComplete="email"
                    className="rounded border border-primary bg-transparent px-2.5 py-1.5 text-sm outline-none focus:ring-2 focus:ring-primary dark:border-white dark:focus:ring-white"
                    maxLength={254}
                    name="email"
                    required
                    type="email"
                />
            </label>
            <label className="flex flex-col gap-1 text-sm font-medium sm:col-span-2">
                Subject
                <input
                    className="rounded border border-primary bg-transparent px-2.5 py-1.5 text-sm outline-none focus:ring-2 focus:ring-primary dark:border-white dark:focus:ring-white"
                    maxLength={160}
                    name="subject"
                    required
                />
            </label>
            <label className="flex flex-col gap-1 text-sm font-medium sm:col-span-2">
                Message
                <textarea
                    className="min-h-28 resize-y rounded border border-primary bg-transparent px-2.5 py-1.5 text-sm outline-none focus:ring-2 focus:ring-primary dark:border-white dark:focus:ring-white"
                    maxLength={5000}
                    name="message"
                    required
                    rows={4}
                />
            </label>
            <button
                className="rounded-md bg-primary px-4 py-2 font-bold text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
                disabled={isPending}
                type="submit"
            >
                {isPending ? "Sending..." : "Send message"}
            </button>
            {state?.message ? (
                <p
                    aria-live="polite"
                    className={`text-sm sm:col-span-2 ${
                        state.success ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"
                    }`}
                >
                    {state.message}
                </p>
            ) : null}
        </form>
    );
};

export default ContactForm;