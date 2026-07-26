"use client";

import { useActionState } from "react";
import { login } from "../actions/auth";
import Input from "../components/input";
import Button from "../components/button";

const Login = () => {
    const [state, formAction] = useActionState(login, undefined);

    return (
        <>
            <div className="h-[60vh] flex">
                <form
                    action={formAction}
                    className="flex flex-col justify-center items-center"
                >
                    <h1 className="text-white text-2xl">Login</h1>
                    <Input type="text" name="username" placeholder="Username" />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                    />

                    {state?.message ? (
                        <p className="mt-2 text-sm text-red-400">
                            {state.message}
                        </p>
                    ) : null}

                    <Button type="submit">Login</Button>
                </form>
            </div>
        </>
    );
};

export default Login;
