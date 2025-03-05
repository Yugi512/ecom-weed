"use client";

import AuthForm from "@/components/userAuthForm";
import { signUp } from "@/lib/actions/auth";
import { signUpSchema } from "@/lib/validations";
import React from "react";

const Page = () => (
    <AuthForm
        type="SIGN_UP"
        schema={signUpSchema}
        defaultValues={{ username: "", firstName: "", lastName: "" ,email: "", password: ""}}
        onSubmit={signUp}
    />
);

export default Page;