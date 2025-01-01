"use client";

import Image from "next/image";
import logo from "@/public/icon.jpeg";
import Link from "next/link";
import toast from "react-hot-toast";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";

import Input from "../_components/InputText";
import { Button } from "../_components/Button";
import { signUp } from "../_lib/actions";
import SpinnerMini from "../_components/SpinnerMini";

function Signup() {
  const [state, formAction] = useFormState(signUp, { status: "", message: "" });

  useEffect(
    function () {
      if (state?.status === "fail") {
        toast.error(state.message);
      }
    },
    [state],
  );

  return (
    <div className="grid-cols-[40%_1fr] lg:grid lg:h-screen">
      <form
        action={formAction}
        className="flex flex-col items-stretch gap-10 px-4 py-4"
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
          <p className="text-xl font-bold lg:text-3xl">Create a new account</p>
          <Link href="">or sign into your account</Link>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="firstname">First Name</label>
          <Input id="firstname" name="firstName" type="text" required={true} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastname">Last Name</label>
          <Input id="lastname" name="lastName" type="text" required={true} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email Adress</label>
          <Input id="email" name="email" type="email" required={true} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            name="password"
            type="password"
            required={true}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Confirm Password</label>
          <Input
            id="password"
            name="passwordConfirm"
            type="password"
            required={true}
          />
        </div>

        <div className="flex flex-col justify-between gap-4 lg:flex-row">
          <div className="flex items-center gap-4">
            <input
              id="confirm"
              name="remeberMe"
              type="checkbox"
              className="h-6 w-6 accent-primary-300 focus:outline-none focus:ring focus:ring-primary-300 focus:ring-offset-1"
            />
            <label htmlFor="confirm">Remember Me</label>
          </div>
          <Link href="">Forgot your password?</Link>
        </div>

        <SignUpButton />
      </form>

      <div className="relative hidden lg:inline-block">
        <Image src={logo} alt="Clinix image logo" placeholder="blur" fill />
      </div>
    </div>
  );
}

function SignUpButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="primary" size="md" disabled={pending}>
      {pending ? <SpinnerMini /> : "Sign Up"}
    </Button>
  );
}

export default Signup;
