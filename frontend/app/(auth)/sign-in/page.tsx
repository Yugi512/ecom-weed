"use client";

import AuthForm from "@/components/Authform";
import { signInWithCredentials } from "@/lib/actions/auth";
import { signInSchema } from "@/lib/validations";
import React from "react";

const SignInPage = () => (
    <AuthForm
        type="SIGN_IN"
        schema={signInSchema}
        defaultValues={{ email: "", password: "" }}
        onSubmit={signInWithCredentials}
    />
);

export default SignInPage;