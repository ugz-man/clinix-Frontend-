"use client";

import { useFormState, useFormStatus } from "react-dom";
import logo from "@/public/icon.jpeg";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../_components/Button";
import Input from "../_components/InputText";
import { signIn } from "../_lib/actions";
import SpinnerMini from "@/app/_components/SpinnerMini";
import toast from "react-hot-toast";
import { useEffect } from "react";

function Login() {
  const [state, formAction] = useFormState(signIn, { status: "", message: "" });

  useEffect(
    function () {
      if (state.status === "fail") {
        toast.error(state.message);
      }
    },
    [state],
  );

  return (
    <div className="grid-cols-[40%_1fr] lg:grid">
      <form
        action={formAction}
        className="flex flex-col gap-10 px-4 py-4 lg:h-screen"
      >
        <div className="flex items-center gap-4">
          <Image
            src={logo}
            alt="Clinix Logo Image"
            placeholder="blur"
            width={50}
          />
          <p className="text-lg font-semibold"> Clinix Hospital</p>
        </div>

        <div>
          <p className="text-xl font-bold lg:text-3xl">
            Sign in to your account
          </p>
          <Link href="">or create a new account</Link>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email Adress</label>
          <Input name="email" id="email" type="email" required={true} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <Input
            name="password"
            id="password"
            type="password"
            required={true}
          />
        </div>

        <div className="flex flex-col justify-between gap-4 lg:flex-row">
          <div className="flex items-center gap-4">
            <input
              id="confirm"
              type="checkbox"
              name="rememberMe"
              className="h-6 w-6 accent-primary-300 focus:outline-none focus:ring focus:ring-primary-300 focus:ring-offset-1"
            />
            <label htmlFor="confirm">Remember Me</label>
          </div>
          <Link href="">Forgot your password?</Link>
        </div>

        <SignInButton />
      </form>

      <div className="relative hidden lg:inline-block">
        <Image src={logo} alt="Clinix image logo" placeholder="blur" fill />
      </div>
    </div>
  );
}

function SignInButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="primary" size="md" disabled={pending}>
      {pending ? <SpinnerMini /> : "Sign In"}
    </Button>
  );
}

export default Login;
