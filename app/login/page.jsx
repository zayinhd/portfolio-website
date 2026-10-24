"use client";

import { useActionState } from "react";
import { login } from "../actions/auth";

const Login = () => {
    const [state, formAction, isPending] = useActionState(login, null);

    return (
        <main className="flex min-h-[60vh] w-full items-center justify-center px-4">
            <form
                action={formAction}
                className="flex w-full max-w-sm flex-col gap-4 rounded-md border border-primary bg-white/80 p-6 text-primary shadow-sm dark:border-white dark:bg-secondary/90 dark:text-white"
            >
                <h1 className="text-center text-2xl font-bold">Log in</h1>

                <label className="flex flex-col gap-1 text-sm font-medium">
                    Email
                    <input
                        autoComplete="email"
                        className="w-full rounded border border-primary bg-transparent px-3 py-2 text-base outline-none focus:ring-2 focus:ring-primary dark:border-white dark:focus:ring-white"
                        name="email"
                        placeholder="you@example.com"
                        required
                        type="email"
                    />
                </label>

                <label className="flex flex-col gap-1 text-sm font-medium">
                    Password
                    <input
                        autoComplete="current-password"
                        className="w-full rounded border border-primary bg-transparent px-3 py-2 text-base outline-none focus:ring-2 focus:ring-primary dark:border-white dark:focus:ring-white"
                        name="password"
                        placeholder="Password"
                        required
                        type="password"
                    />
                </label>

                <button
                    className="w-full rounded-md bg-primary px-4 py-2 font-bold text-white hover:opacity-90 disabled:cursor-not-allowed"
                    disabled={isPending}
                    type="submit"
                >
                    {isPending ? "Logging in..." : "Log in"}
                </button>

                {state?.message ? (
                    <p aria-live="polite" className="text-center text-sm">
                        {state.message}
                    </p>
                ) : null}
            </form>
        </main>
    );
};

export default Login;
