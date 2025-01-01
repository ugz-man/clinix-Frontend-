import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

import { BACKEND_URL } from "@/app/_lib/backend";

export async function setJWTTokenCookie(token: string) {
  //   set the cookie with the values gooten from the server
  cookies().set("jwt", token, {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  });
}

export async function signIn(
  prevState: { status: string; messsage: string },
  formData: FormData,
) {
  // create the user login information
  const userLogin: {
    email: FormDataEntryValue;
    password: FormDataEntryValue;
    rememberMe: boolean;
  } = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    rememberMe: (formData.get("rememberMe") === "on" ? true : false) as boolean,
  };

  // throw new Error("AN error happened");
  // await new Promise((res) => setTimeout(res, 1000));

  // send the post data to the server to login in the user
  const res = await fetch(`${BACKEND_URL}/api/v1/users/signin`, {
    method: "POST",
    body: JSON.stringify(userLogin),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // if the reponse was not okay do this
  if (!res.ok) {
    return await res.json();
  }

  const response = await res.json();

  // set a jwt token on a browser
  setJWTTokenCookie(response.token);

  // redirect to the home page and replace the login page
  // in the browser history stack
  redirect("/doctors", RedirectType.replace);
}

export async function signUp(
  prevState: { status: ""; message: "" },
  formData: FormData,
) {
  const newUser: {
    firstName: FormDataEntryValue;
    lastName: FormDataEntryValue;
    email: FormDataEntryValue;
    password: FormDataEntryValue;
    passwordConfirm: FormDataEntryValue;
    rememberMe: boolean;
  } = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    passwordConfirm: formData.get("passwordConfirm") as string,
    rememberMe: formData.get("remeberMe") === "on" ? true : false,
  };

  // if the password is not the same as password confirm, do nothing
  if (newUser.password !== newUser.passwordConfirm) {
    return {
      status: "fail",
      message: "Passowrd is different from password confirm",
    };
  }

  const res = await fetch(`${BACKEND_URL}/api/v1/users/signup`, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // if respose is not okay return the error
  if (!res.ok) {
    return await res.json();
  }

  const response = await res.json();

  // set the jwt token cookie on the browser
  setJWTTokenCookie(response.token);

  redirect("/doctors", RedirectType.replace);
}
